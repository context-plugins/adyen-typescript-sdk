import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Settings to define the behaviour of the payment terminal. */
export type TerminalInstructions1 = {
  /**
   * Indicates whether the Adyen app on the payment terminal restarts automatically when the
   * configuration is updated.
   */
  adyenAppRestart?: boolean;
};

export const terminalInstructions1Schema: Schema<TerminalInstructions1> = s.object<TerminalInstructions1>({
  adyenAppRestart: s.optional(s.boolean()),
});
