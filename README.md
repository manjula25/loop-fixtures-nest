# loop-fixtures-nest

Small, deliberately buggy Nest.js fixture project for the
[software-factory-loop](https://github.com/manjula25/software-factory-loop) harness. **Not a real
library** — it exists so the harness has a known-buggy Nest.js target with filed issues.

Born green: `npm test` passes on a clean checkout. Three seeded defects are latent — no test
reaches them — and each open issue describes only the user-visible symptom.

## Install, test, run

```bash
npm ci
npm test
npm start   # builds, then http://localhost:8767  (PORT overrides)
```

Tests and the running app need no network and no services.
