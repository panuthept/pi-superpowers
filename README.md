# pi-superpowers

Superpowers skills and bootstrap for [Pi](https://pi.dev) — a collection of battle-tested
methodologies (TDD, debugging, brainstorming, subagent workflows) that auto-trigger
when the model detects they apply.

## Installation

```bash
pi install npm:pi-superpowers
```

Or from a local checkout:

```bash
pi install /path/to/pi-superpowers
```

## What's included

| Skill | Trigger | What it does |
|---|---|---|
| `brainstorming` | Creative work, feature planning | Explores intent, requirements, and design before implementation |
| `dispatching-parallel-agents` | 2+ independent tasks | Runs independent tasks in parallel |
| `executing-plans` | Written implementation plan | Executes a plan in a separate session with review checkpoints |
| `finishing-a-development-branch` | Implementation complete | Guides merge, PR, or cleanup decisions |
| `receiving-code-review` | Review feedback received | Rigorous verification before implementing suggestions |
| `requesting-code-review` | Before merging | Verifies work meets requirements |
| `subagent-driven-development` | Complex implementation | Splits work across subagents for parallel development |
| `systematic-debugging` | Bugs, test failures | Systematic investigation before proposing fixes |
| `test-driven-development` | Before implementation code | Tests first, then implementation |
| `using-git-worktrees` | Feature work needing isolation | Creates isolated workspaces |
| `using-superpowers` | Session start (auto-injected) | Establishes how to find and use all skills |
| `verification-before-completion` | Before claiming done | Runs verification commands before asserting completion |
| `writing-plans` | Multi-step task specs | Creates implementation plans before touching code |
| `writing-skills` | Creating/editing skills | Guides skill creation and deployment |

## How it works

At session start, the `using-superpowers` bootstrap is injected into context
(once, with dedup). It tells the model to check for a relevant skill before
responding. When a trigger matches, the model reads the skill's `SKILL.md` and
follows it.

Pi discovers skills from `pi.skills` in `package.json`. The bootstrap is injected
via the pi extension at `.pi/extensions/superpowers.ts`.

## Platform

This is a **pi-only** package — a stripped version of the full
[Superpowers](https://github.com/earendil-works/superpowers) repo, containing
only the pi harness integration. For other harnesses (Claude Code, Codex, Cursor,
Gemini, etc.), see the upstream repo.

## License

MIT — see [LICENSE](LICENSE).
