import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalInstructions = {
  /**
   * Indicates whether the Adyen app on the payment terminal restarts automatically when the
   * configuration is updated.
   */
  adyenAppRestart?: boolean;
};

export const terminalInstructionsSchema: Schema<TerminalInstructions> = s.object<TerminalInstructions>({
  adyenAppRestart: s.optional(s.boolean()),
});
