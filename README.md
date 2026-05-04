# tramnew

Playwright test setup for GitHub Codespaces.

## Quick start

1. Open this repository in Codespaces.
2. Wait for the post-create step to finish (`npm install` and Playwright browser install).
3. Run tests:

```bash
npm test
```

## Useful commands

```bash
npm run test:ui
npm run test:debug
npm run report
```

## Project files

- `playwright.config.ts`: Playwright runtime configuration.
- `tests/example.spec.ts`: basic smoke test.
- `.devcontainer/devcontainer.json`: Codespaces container and setup command.