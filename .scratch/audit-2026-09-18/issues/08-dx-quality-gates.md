# 08: Quality gates and clean tree

**What to build:** Every push verifies itself — typecheck and build run green in CI — the working tree is clean, and dead code a newcomer would trip over is gone.

**Blocked by:** 01 (Refresh onboarding docs — enforces the install/typecheck/build commands the docs promise).

**Status:** ready-for-agent

- [ ] CI runs package-manager install plus typecheck plus production build on every pull request
- [ ] Dirty working tree resolved: pending style/section changes and the untracked composable are committed, split, or reverted — nothing lingers uncommitted
- [ ] Dead site-content exports (stack/tool lists nothing renders) are either wired into the UI or removed, with the content model documented
- [ ] Single package manager plus pinned version documented and enforced so installs stay reproducible
