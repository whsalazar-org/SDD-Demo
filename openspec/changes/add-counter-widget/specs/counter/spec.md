# Spec: Counter Capability

## ADDED Requirements

### Requirement: Display current count
The counter SHALL display the current numeric value at all times.

#### Scenario: Initial render
- **GIVEN** the Counter widget has just mounted
- **WHEN** it renders
- **THEN** it displays a count of `0`

### Requirement: Increment the count
The counter SHALL increase the displayed value by the current step size when
the "Increment" control is activated.

#### Scenario: Increment from zero
- **GIVEN** the counter shows `0` and the step size is `1`
- **WHEN** the visitor activates "Increment"
- **THEN** the counter shows `1`

#### Scenario: Increment respects a custom step
- **GIVEN** the counter shows `0` and the step size is `5`
- **WHEN** the visitor activates "Increment"
- **THEN** the counter shows `5`

### Requirement: Decrement the count without going negative
The counter SHALL decrease the displayed value by the current step size when
the "Decrement" control is activated, but SHALL NOT go below `0`.

#### Scenario: Decrement above zero
- **GIVEN** the counter shows `5` and the step size is `1`
- **WHEN** the visitor activates "Decrement"
- **THEN** the counter shows `4`

#### Scenario: Decrement is clamped at zero
- **GIVEN** the counter shows `0` and the step size is `1`
- **WHEN** the visitor activates "Decrement"
- **THEN** the counter still shows `0`
- **AND** the "Decrement" control is disabled

### Requirement: Reset the count
The counter SHALL provide a "Reset" control that sets the value back to `0`.

#### Scenario: Reset after incrementing
- **GIVEN** the counter shows `12`
- **WHEN** the visitor activates "Reset"
- **THEN** the counter shows `0`

### Requirement: Configurable step size
The counter SHALL allow the visitor to choose the step size used by
Increment/Decrement from a small set of presets (`1`, `5`, `10`).

#### Scenario: Changing the step size does not change the count
- **GIVEN** the counter shows `3`
- **WHEN** the visitor changes the step size from `1` to `10`
- **THEN** the counter still shows `3`
