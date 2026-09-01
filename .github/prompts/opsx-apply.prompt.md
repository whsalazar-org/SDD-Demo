---
description: 'Implement the tasks of an existing OpenSpec change, checking each task off as it is completed.'
---

# /opsx-apply

You are driving the **Implement** portion of this repo's spec-driven workflow
(see `openspec/project.md`).

Given the id of an existing change under `openspec/changes/<change-id>/`:

1. Read `proposal.md`, `specs/**/spec.md`, and `tasks.md` for that change.
2. Implement the code in `app/src` needed to satisfy every scenario in the
   spec, following this repo's code style (function components, hooks,
   co-located tests).
3. Add or update tests under `app/src` that exercise each scenario in the spec.
4. Check off each task in `tasks.md` (`- [ ]` → `- [x]`) as you complete it.
5. Run `npm run lint`, `npm test`, and `npm run build` inside `app/` and fix
   any failures before finishing.

Do not modify the spec while implementing — if the spec is wrong or
incomplete, stop and flag it instead of silently changing the requirements.
