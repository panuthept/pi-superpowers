/**
 * Superpowers slash commands
 *
 * Registers /brainstorm, /tdd, /debug, /plan, /review, /parallel,
 * /subagent, /verify, /finish — each sends a prompt that triggers
 * the matching skill via the auto-detect mechanism.
 */

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

interface Cmd {
	name: string;
	description: string;
	prompt(args: string): string;
}

const commands: Cmd[] = [
	{
		name: "brainstorm",
		description: "Explore intent, requirements, and design before implementation",
		prompt: (args) => `Let's brainstorm: ${args || "review the approach and explore options"}\n\nUse the brainstorming skill before responding.`,
	},
	{
		name: "tdd",
		description: "Test-driven development — write tests first, then implement",
		prompt: (args) => `Let's use TDD for: ${args || "the current task"}\n\nUse the test-driven-development skill before writing implementation code.`,
	},
	{
		name: "debug",
		description: "Systematic debugging — investigate before fixing",
		prompt: (args) => `Let's debug: ${args || "the current issue"}\n\nUse the systematic-debugging skill — investigate root cause before proposing fixes.`,
	},
	{
		name: "plan",
		description: "Write an implementation plan for a multi-step task",
		prompt: (args) => `Let's write a plan for: ${args || "the current task"}\n\nUse the writing-plans skill to create an implementation plan before touching code.`,
	},
	{
		name: "review",
		description: "Request a code review before merging",
		prompt: (args) => `Please review: ${args || "the current changes"}\n\nUse the requesting-code-review skill to verify the work meets requirements.`,
	},
	{
		name: "parallel",
		description: "Dispatch independent tasks in parallel",
		prompt: (args) => `Let's parallelize: ${args || "the independent tasks"}\n\nUse the dispatching-parallel-agents skill — these are independent with no shared state.`,
	},
	{
		name: "subagent",
		description: "Subagent-driven development for complex implementation",
		prompt: (args) => `Let's use subagents for: ${args || "the implementation"}\n\nUse the subagent-driven-development skill to split work across agents.`,
	},
	{
		name: "verify",
		description: "Verify work before claiming completion",
		prompt: (args) => `Let's verify: ${args || "the current work"}\n\nUse the verification-before-completion skill — run verification commands before asserting anything is done.`,
	},
	{
		name: "finish",
		description: "Guide merge, PR, or cleanup when implementation is complete",
		prompt: (args) => `Let's finish: ${args || "the current branch"}\n\nUse the finishing-a-development-branch skill — decide merge, PR, or cleanup.`,
	},
];

export default function (pi: ExtensionAPI) {
	for (const cmd of commands) {
		pi.registerCommand(cmd.name, {
			description: cmd.description,
			handler: async (_args, ctx) => {
				// Send a prompt that will trigger the matching skill via auto-detect
				pi.sendUserMessage(cmd.prompt(_args));
			},
		});
	}
}
