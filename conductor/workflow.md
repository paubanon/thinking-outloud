# Conductor Workflow

## Task Execution
- Complete one task at a time, in order
- Commit after each task with a descriptive message
- Run tests after each task to ensure nothing is broken

## Test Coverage
- Target: >80% test coverage
- Write tests alongside implementation, not after

## Git Conventions
- Commit messages: `type(scope): description`
  - Types: feat, fix, refactor, style, docs, test, chore
  - Scope: component or area affected
- Use Git Notes for task summaries (`git notes add -m "summary"`)
- One logical change per commit

## User Manual Verification Protocol
At the end of each phase, a verification task is included:
1. Start the dev server
2. Manually verify the feature works as described in the spec
3. Check for visual/UX issues not caught by tests
4. Mark the verification task as complete only after confirming

## Code Quality
- No linter warnings in committed code
- No TODO comments without a linked track/task
- Follow the project's code styleguides in `conductor/code_styleguides/`
