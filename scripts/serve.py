"""Serve this repository locally; no external interfaces are bound."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from functools import partial
from pathlib import Path
import argparse

if __name__ == '__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port',type=int,default=8000)
    args=parser.parse_args()
    root=Path(__file__).resolve().parents[1]
    print(f'Open http://127.0.0.1:{args.port} — {root.name}',flush=True)
    try:
        ThreadingHTTPServer(('127.0.0.1',args.port),partial(SimpleHTTPRequestHandler,directory=str(root))).serve_forever()
    except KeyboardInterrupt:
        pass
