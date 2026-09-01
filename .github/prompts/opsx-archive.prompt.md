---
description: 'Review a completed OpenSpec change against its spec and tasks, then archive it.'
---

# /opsx-archive

You are driving the **Review** portion of this repo's spec-driven workflow
(see `openspec/project.md`).

Given the id of a change under `openspec/changes/<change-id>/` whose tasks are
all checked off:

1. Re-read `specs/**/spec.md` and verify the implementation in `app/src`
   satisfies every scenario (read the code and, where practical, the test
   output — don't just trust the checkboxes).
2. Confirm `npm run lint`, `npm test`, and `npm run build` all pass inside
   `app/`.
3. Note any drift between the spec and the implementation. If drift exists,
   stop and report it instead of archiving.
4. If everything checks out, move the change folder to
   `openspec/changes/archive/<change-id>/`.
