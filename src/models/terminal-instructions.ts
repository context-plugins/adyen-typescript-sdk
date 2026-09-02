import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalInstructions = {
  adyenAppRestart?: boolean;
};

export const terminalInstructionsSchema: Schema<TerminalInstructions> = s.object<TerminalInstructions>({
  adyenAppRestart: s.optional(s.boolean()),
});
