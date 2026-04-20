#!/bin/bash
# Deploy vArmory MCP server + SPA to Heroku
#
# Usage:
#   bash deploy.sh heroku_application_id
#
# The demo must be built already (cd varmory && npm run builddemo)

set -e

APP="$1"
if [ -z "$APP" ]; then
    echo "Usage: bash deploy.sh <heroku-app-name>"
    exit 1
fi

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
TMPDIR=$(mktemp -d)

echo "==> Assembling deploy package in $TMPDIR"

# Copy demo build
cp -r "$ROOT/demo" "$TMPDIR/demo"

# Copy mcp server and helpers
mkdir -p "$TMPDIR/mcp"
cp "$ROOT/mcp/server.js" "$TMPDIR/mcp/"
cp "$ROOT/mcp/showcaseMcp.js" "$TMPDIR/mcp/"
cp "$ROOT/mcp/package.json" "$TMPDIR/mcp/"

# Copy docs and source for the MCP tools to read
cp "$ROOT/README.md" "$TMPDIR/"
cp -r "$ROOT/docs" "$TMPDIR/docs"
mkdir -p "$TMPDIR/src/varmory/showcase"
cp -r "$ROOT/src/varmory/showcase/categories" "$TMPDIR/src/varmory/showcase/categories"
cp -r "$ROOT/src/varmory/showcase/definitions" "$TMPDIR/src/varmory/showcase/definitions"

# Copy the normalizer module that showcaseMcp.js imports
mkdir -p "$TMPDIR/src/varmory/includes"
cp "$ROOT/src/varmory/includes/normalizeQuasarApi.js" "$TMPDIR/src/varmory/includes/"
cp "$ROOT/src/varmory/includes/package.json" "$TMPDIR/src/varmory/includes/"

# Create root package.json for Heroku
cat > "$TMPDIR/package.json" << 'PKGJSON'
{
  "name": "varmory-server",
  "version": "1.0.0",
  "type": "module",
  "engines": {
    "node": "22.x"
  },
  "scripts": {
    "start": "node mcp/server.js"
  },
  "dependencies": {
    "@fastify/cors": "^11.2.0",
    "@fastify/static": "^8.1.0",
    "@modelcontextprotocol/sdk": "^1.12.1",
    "fastify": "^5.3.0",
    "quasar": "^2.19.2",
    "zod": "^3.25.0"
  }
}
PKGJSON

# Procfile
cp "$(dirname "$0")/Procfile" "$TMPDIR/Procfile"

echo "==> Setting Heroku buildpack to heroku/nodejs"
heroku buildpacks:set heroku/nodejs --app "$APP" 2>/dev/null || true

echo "==> Deploying to $APP"
(cd "$TMPDIR" && heroku builds:create -a "$APP")

echo "==> Cleaning up"
rm -rf "$TMPDIR"

echo "==> Done. App: https://$APP.herokuapp.com"
echo "    MCP endpoint: https://$APP.herokuapp.com/mcp"
