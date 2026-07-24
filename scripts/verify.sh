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

run_step() {
  local description="$1"
  shift

  log "$description"

  if "$@"; then
    echo "$description completed successfully."
  else
    echo "$description failed."
    exit 1
  fi
}

run_step "Running lint" npm run lint
run_step "Running format" npm run format
run_step "Running tests" npm test
run_step "Running build" npm run build

log "Verification completed successfully!"
