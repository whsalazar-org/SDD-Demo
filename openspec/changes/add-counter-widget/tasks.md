# Tasks: Add Counter Widget

## 1. Component
- [x] 1.1 Create `app/src/components/Counter.tsx` with `count` and `step` state
- [x] 1.2 Implement Increment/Decrement/Reset handlers per `specs/counter/spec.md`
- [x] 1.3 Clamp decrement at `0` and disable the Decrement control when count is `0`
- [x] 1.4 Add a step-size selector (`1` / `5` / `10`) that never mutates `count`

## 2. Integration
- [x] 2.1 Render `<Counter />` from `App.tsx` in place of the starter demo button

## 3. Tests
- [x] 3.1 Add `app/src/components/Counter.test.tsx` covering every scenario in
      `specs/counter/spec.md`

## 4. Verification
- [x] 4.1 `npm run lint` passes
- [x] 4.2 `npm test` passes
- [x] 4.3 `npm run build` succeeds
