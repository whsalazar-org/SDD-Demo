# Project Context

## Purpose
SDD-Demo is a lightweight, end-to-end example of **spec-driven development (SDD)**
using [OpenSpec](https://github.com/Fission-AI/OpenSpec) and GitHub Copilot to
build a simple React + TypeScript website. It shows every artifact produced
while walking through the structured workflow:

```
Understand → Spec → Tasks → Implement → Review
```

## Tech Stack
- React 19 + TypeScript
- Vite (dev server / build tool)
- Vitest + Testing Library (unit tests)

## Project Conventions

### Code Style
- Function components with hooks; no class components.
- Co-locate a component's styles and tests next to the component file.
- Keep components small and focused on a single responsibility.

### Change Workflow (this repo's flavor of OpenSpec)
Every feature starts as a **change proposal** under `openspec/changes/<change-id>/`:

1. **Understand** — capture the "why" in `proposal.md` (problem, goal, non-goals).
2. **Spec** — write the observable behavior as Given/When/Then scenarios in
   `specs/<capability>/spec.md`.
3. **Tasks** — break the spec into small, checkable steps in `tasks.md`.
4. **Implement** — write the code in `app/src` that satisfies the spec, checking
   off tasks as they're completed.
5. **Review** — verify the implementation against the spec/tasks, run tests and
   lint, then archive the change under `openspec/changes/archive/`.

### Working with GitHub Copilot
This repo ships Copilot-ready prompt files and skills so the workflow above can
be driven with slash commands inside VS Code/JetBrains/Visual Studio Copilot
Chat, following the invocation conventions documented in OpenSpec's
[Supported Tools guide](https://github.com/Fission-AI/OpenSpec/blob/main/docs/supported-tools.md#how-to-invoke):

| Command file | Invocation | Purpose |
|---|---|---|
| `.github/prompts/opsx-propose.prompt.md` | `/opsx-propose` | Start a new change: Understand + Spec + Tasks |
| `.github/prompts/opsx-apply.prompt.md` | `/opsx-apply` | Implement a change's tasks |
| `.github/prompts/opsx-archive.prompt.md` | `/opsx-archive` | Review + archive a completed change |

See `README.md` for the full walkthrough using the `add-counter-widget` example
change included in this repo.
