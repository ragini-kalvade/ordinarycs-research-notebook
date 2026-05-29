#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
chmod +x .githooks/prepare-commit-msg
git config core.hooksPath .githooks
echo "Git hooks enabled (.githooks/prepare-commit-msg strips Cursor co-author trailers)."
