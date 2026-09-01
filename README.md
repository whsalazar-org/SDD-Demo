# SDD-Demo

A lightweight demo of using [OpenSpec](https://github.com/Fission-AI/OpenSpec)
and GitHub Copilot to build a simple React + TypeScript website using a
structured workflow:

```
Understand → Spec → Tasks → Implement → Review
```

## What's here

| Path | Purpose |
|---|---|
| `openspec/project.md` | Project conventions and the workflow this repo follows |
| `openspec/changes/add-counter-widget/` | A fully worked example change: `proposal.md` (Understand), `specs/counter/spec.md` (Spec), `tasks.md` (Tasks) |
| `app/` | The React + TypeScript site (Vite), including the `Counter` implementation and its tests (Implement) |
| `.github/prompts/opsx-*.prompt.md` | Copilot Chat slash commands that drive each workflow step |
| `.github/skills/openspec-*/SKILL.md` | Copilot skills backing those commands |

## The workflow, step by step

1. **Understand** — [`openspec/changes/add-counter-widget/proposal.md`](openspec/changes/add-counter-widget/proposal.md)
   captures the problem, goal, and non-goals for the Counter feature.
2. **Spec** — [`openspec/changes/add-counter-widget/specs/counter/spec.md`](openspec/changes/add-counter-widget/specs/counter/spec.md)
   defines its observable behavior as Given/When/Then scenarios.
3. **Tasks** — [`openspec/changes/add-counter-widget/tasks.md`](openspec/changes/add-counter-widget/tasks.md)
   breaks the spec into small, checkable implementation steps.
4. **Implement** — [`app/src/components/Counter.tsx`](app/src/components/Counter.tsx)
   satisfies the spec; [`app/src/components/Counter.test.tsx`](app/src/components/Counter.test.tsx)
   verifies each scenario.
5. **Review** — run the checks below, confirm the implementation matches the
   spec, then the change is archived under `openspec/changes/archive/`.

## Driving the workflow with GitHub Copilot

This repo ships prompt files under `.github/prompts/` following the
invocation conventions from OpenSpec's
[Supported Tools guide](https://github.com/Fission-AI/OpenSpec/blob/main/docs/supported-tools.md#how-to-invoke)
for GitHub Copilot (`.github/prompts/opsx-<id>.prompt.md`, invoked as
`/opsx-<id>` in Copilot Chat in VS Code/JetBrains/Visual Studio):

- `/opsx-propose` — Understand a new request and write its proposal, spec, and tasks
- `/opsx-apply` — Implement a change's tasks against its spec
- `/opsx-archive` — Review a completed change and archive it

## Running the app

```bash
cd app
npm install
npm run dev      # start the dev server
npm test         # run the Vitest suite
npm run lint     # run oxlint
npm run build    # type-check and build for production
```