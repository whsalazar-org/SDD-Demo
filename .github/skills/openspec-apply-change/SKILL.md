---
name: openspec-apply-change
description: Implement the tasks of an existing OpenSpec change, following its spec and checking tasks off as they're completed.
---

# OpenSpec: Apply Change

Use this skill to implement a change that already has a `proposal.md`,
`specs/**/spec.md`, and `tasks.md` under `openspec/changes/<change-id>/`.

1. Read the proposal, spec, and tasks for the change.
2. Implement code under `app/src` that satisfies every scenario in the spec.
3. Add or update tests alongside the implementation.
4. Check off tasks in `tasks.md` as you complete them.
5. Run `npm run lint`, `npm test`, and `npm run build` in `app/` and fix any
   failures.

Never change the spec while implementing; flag spec issues instead of
resolving them silently.
