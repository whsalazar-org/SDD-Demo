---
name: openspec-archive
description: Review a completed OpenSpec change against its spec and tasks, verify tests pass, then archive it.
---

# OpenSpec: Archive

Use this skill once every task in an `openspec/changes/<change-id>/tasks.md`
is checked off.

1. Verify the implementation under `app/src` satisfies every scenario in
   `specs/**/spec.md`.
2. Confirm `npm run lint`, `npm test`, and `npm run build` pass in `app/`.
3. Report any drift between spec and implementation instead of archiving if
   found.
4. Otherwise, move the change folder to `openspec/changes/archive/<change-id>/`.
