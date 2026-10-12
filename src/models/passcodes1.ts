import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Settings for
 * [passcodes](https://docs.adyen.com/point-of-sale/managing-terminals/menu-access?tab=manage_passcodes_with_an_api_call_2#manage-passcodes)
 * features.
 */
export type Passcodes1 = {
  /** The passcode for the Admin menu and the Settings menu. */
  adminMenuPin?: string;
  /** The passcode for referenced and unreferenced refunds on standalone terminals. */
  refundPin?: string;
  /** The passcode to unlock the terminal screen after a timeout. */
  screenLockPin?: string;
  /** The passcode for the Transactions menu. */
  txMenuPin?: string;
};

export const passcodes1Schema: Schema<Passcodes1> = s.object<Passcodes1>({
  adminMenuPin: s.optional(s.string()),
  refundPin: s.optional(s.string()),
  screenLockPin: s.optional(s.string()),
  txMenuPin: s.optional(s.string()),
});
