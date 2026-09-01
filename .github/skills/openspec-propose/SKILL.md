---
name: openspec-propose
description: Understand a request and write an OpenSpec proposal, spec, and task list for a new change, without writing implementation code.
---

# OpenSpec: Propose

Use this skill at the start of any new feature or fix in this repository.

1. **Understand** the request: restate the problem, the goal, and non-goals.
2. **Spec** the observable behavior as Given/When/Then scenarios grouped under
   `## Requirement` headings.
3. **Tasks**: break the spec into small, verifiable `- [ ]` checklist items.

Write these to a new `openspec/changes/<change-id>/` folder as `proposal.md`,
`specs/<capability>/spec.md`, and `tasks.md`. Use
`openspec/changes/add-counter-widget/` as the reference example for format and
level of detail.
