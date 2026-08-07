#!/usr/bin/env bash
# Next.js の静的書き出し（web/out）をリポジトリルートに同期します。
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/web"
npm run build
cd "$ROOT"

# out/ の内容をルートへ反映（web/ や scripts/ は上書きしない）
rsync -a "$ROOT/web/out/" "$ROOT/"

echo "OK: synced web/out → repository root"
