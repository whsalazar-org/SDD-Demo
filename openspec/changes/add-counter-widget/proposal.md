# Proposal: Add Counter Widget

## Understand

### Problem
The demo site is just the default Vite/React starter page. We need a small,
self-contained feature that is simple enough to fully specify, yet rich enough
to demonstrate an SDD workflow end-to-end (state, user interaction, edge
cases, and tests).

### Goal
Add a `Counter` widget to the home page that lets a visitor increment,
decrement, and reset a numeric value, with a configurable step size and a
guard against going below zero.

### Non-goals
- No persistence (value resets on page reload).
- No backend/API integration.
- No styling system beyond the existing minimal CSS.

## Why now
This is the first feature of the demo repository, so it establishes the
pattern (`proposal.md` → `specs/` → `tasks.md` → implementation → review) that
future changes in this repo will follow.
