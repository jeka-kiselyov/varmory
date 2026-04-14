### Heroku deployment

Deploys the vArmory MCP + demo server as a Node.js app.

Single Heroku dyno serves:
- `GET /*` — the demo SPA (component showcase)
- `POST /mcp` — MCP Streamable HTTP endpoint for AI agents

#### Prerequisites

1. Build the demo first: `cd varmory && npm run builddemo`
2. Heroku CLI installed and logged in
3. A Heroku app created

#### Usage

```bash
bash deploy.sh heroku_application_id
```

#### Connecting an MCP client

```
MCP endpoint: https://<app-name>.herokuapp.com/mcp
Transport: Streamable HTTP
```
