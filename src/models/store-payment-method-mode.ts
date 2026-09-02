import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StorePaymentMethodMode = {
  AskForConsent: "askForConsent",
  Disabled: "disabled",
  Enabled: "enabled",
} as const;
export type StorePaymentMethodMode =
  | (typeof StorePaymentMethodMode)[keyof typeof StorePaymentMethodMode]
  | (string & {});

export const storePaymentMethodModeSchema: EnumSchema<StorePaymentMethodMode> =
  s.enumOf<StorePaymentMethodMode>(StorePaymentMethodMode);
