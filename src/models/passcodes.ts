import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Passcodes = {
  /** The passcode for the Admin menu and the Settings menu. */
  adminMenuPin?: string;
  /** The passcode for referenced and unreferenced refunds on standalone terminals. */
  refundPin?: string;
  /** The passcode to unlock the terminal screen after a timeout. */
  screenLockPin?: string;
  /** The passcode for the Transactions menu. */
  txMenuPin?: string;
};

export const passcodesSchema: Schema<Passcodes> = s.object<Passcodes>({
  adminMenuPin: s.optional(s.string()),
  refundPin: s.optional(s.string()),
  screenLockPin: s.optional(s.string()),
  txMenuPin: s.optional(s.string()),
});
