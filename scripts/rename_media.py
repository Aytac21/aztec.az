#!/usr/bin/env python3
"""
Rename every image inside /media/<Folder>/ to "<Folder>_1.ext", "<Folder>_2.ext".

- Skipped folders: KÖMƏKÇİ FOTOLAR, Logo
- Skipped files:   .DS_Store, anything already matching <Folder>_NN pattern
- Order: sorted by current filename (stable, reproducible).

Usage:
    python3 scripts/rename_media.py             # dry-run (shows what would happen)
    python3 scripts/rename_media.py --apply     # actually rename
"""
import argparse
import re
import sys
import unicodedata
from pathlib import Path

MEDIA_DIR = Path(__file__).resolve().parents[1] / 'media'

SKIP_DIRS = {'KÖMƏKÇİ FOTOLAR', 'Logo', 'Aztec Əməkdaş Fotoları'}
SKIP_FILES = {'.DS_Store'}
IMAGE_EXTS = {'.jpg', '.jpeg', '.png', '.webp', '.gif', '.heic', '.tiff', '.bmp'}


def _nfc(s: str) -> str:
    """Normalize to NFC so macOS HFS+/APFS (NFD) names compare properly."""
    return unicodedata.normalize('NFC', s)


SKIP_DIRS_NFC = {_nfc(x) for x in SKIP_DIRS}


def is_target_folder(p: Path) -> bool:
    return (
        p.is_dir()
        and _nfc(p.name) not in SKIP_DIRS_NFC
        and not p.name.startswith('.')
    )


def already_renamed(name: str, folder: str) -> bool:
    # matches "<folder>_123.ext"
    return bool(re.match(rf'^{re.escape(folder)}_\d+\.[A-Za-z0-9]+$', name))


def sanitize_ext(ext: str) -> str:
    ext = ext.lower()
    if ext == '.jpeg':
        ext = '.jpg'
    return ext


def collect_images(folder: Path):
    files = []
    for f in folder.iterdir():
        if not f.is_file():
            continue
        if f.name in SKIP_FILES:
            continue
        if f.suffix.lower() not in IMAGE_EXTS:
            continue
        files.append(f)
    files.sort(key=lambda p: p.name.lower())
    return files


def plan_renames(folder: Path):
    folder_name = folder.name
    files = collect_images(folder)
    plan = []
    for idx, src in enumerate(files, start=1):
        ext = sanitize_ext(src.suffix)
        dst = folder / f'{folder_name}_{idx}{ext}'
        if src.name == dst.name:
            continue
        plan.append((src, dst))
    return plan


def execute(plan, apply: bool):
    # two-phase rename to avoid collisions: first to temp, then to final
    for src, dst in plan:
        tmp = src.with_name(f'__tmp__{src.name}')
        print(f'  {src.name}  →  {dst.name}')
        if apply:
            src.rename(tmp)
            tmp.rename(dst)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--apply', action='store_true', help='Actually perform renames.')
    parser.add_argument('--media', default=str(MEDIA_DIR), help='Media root.')
    args = parser.parse_args()

    root = Path(args.media)
    if not root.exists():
        sys.exit(f'Media folder not found: {root}')

    total = 0
    folders = sorted([p for p in root.iterdir() if is_target_folder(p)], key=lambda p: p.name)
    for folder in folders:
        plan = plan_renames(folder)
        if not plan:
            print(f'[skip] {folder.name} — nothing to rename')
            continue
        print(f'\n[{folder.name}] — {len(plan)} file(s)')
        execute(plan, args.apply)
        total += len(plan)

    mode = 'APPLIED' if args.apply else 'DRY-RUN'
    print(f'\n{mode}: {total} file(s) across {len(folders)} folder(s).')
    if not args.apply:
        print('Run with --apply to perform the renames.')


if __name__ == '__main__':
    main()
