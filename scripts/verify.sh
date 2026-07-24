#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

log() {
  echo
  echo "========================================"
  echo "$1"
  echo "========================================"
}

log "Running lint"
npm run lint

log "Running format"
npm run format

log "Running tests"
npm test

log "Running build"
npm run build

log "Verification completed successfully!"
