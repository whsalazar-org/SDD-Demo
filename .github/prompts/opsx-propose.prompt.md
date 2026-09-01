---
description: 'Understand a problem, then write an OpenSpec proposal (proposal.md), spec (specs/**/spec.md), and tasks (tasks.md) for a new change.'
---

# /opsx-propose

You are driving the **Understand → Spec → Tasks** portion of this repo's
spec-driven workflow (see `openspec/project.md`).

Given a short feature request from the user:

1. **Understand** — Ask clarifying questions if the request is ambiguous.
   Summarize the problem, the goal, and explicit non-goals.
2. **Spec** — Write the observable behavior as `## Requirement` / `#### Scenario`
   blocks using Given/When/Then, following the format used in
   `openspec/changes/add-counter-widget/specs/counter/spec.md`.
3. **Tasks** — Break the spec into small, independently checkable steps.

Create a new folder `openspec/changes/<change-id>/` (kebab-case id derived from
the feature name) containing:
- `proposal.md` — the Understand write-up
- `specs/<capability>/spec.md` — the Spec write-up
- `tasks.md` — the Tasks write-up, each item as a `- [ ]` checkbox

Do not write implementation code in this step.
