import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalInstructions1 = {
  adyenAppRestart?: boolean;
};

export const terminalInstructions1Schema: Schema<TerminalInstructions1> = s.object<TerminalInstructions1>({
  adyenAppRestart: s.optional(s.boolean()),
});
