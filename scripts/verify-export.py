"""Check exported local links and assets, with an optional repository base path."""
from html.parser import HTMLParser
from pathlib import Path
import sys
from urllib.parse import urlsplit, unquote
root = Path(__file__).resolve().parents[1] / 'out'
base = sys.argv[1].rstrip('/') if len(sys.argv) > 1 else ''
errors = []
count = 0
class Links(HTMLParser):
    def handle_starttag(self, tag, attrs):
        global count
        for key, value in attrs:
            if key not in ('href','src') or not value or not value.startswith('/') or value.startswith('//'):
                continue
            path = unquote(urlsplit(value).path)
            if base and not (path == base or path.startswith(base+'/')):
                errors.append(f'{current}: missing base path: {path}')
                continue
            local = root / path[len(base):].lstrip('/')
            count += 1
            if not (local.is_file() or (local/'index.html').is_file()):
                errors.append(f'{current}: missing target: {path}')
for current in root.rglob('*.html'):
    Links().feed(current.read_text())
if errors:
    print('\n'.join(errors));sys.exit(1)
print(f'PASS: {count} local link/asset references across {len(list(root.rglob("*.html")))} HTML files; base path {base or "/"}')
