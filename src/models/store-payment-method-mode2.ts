import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StorePaymentMethodMode2 = {
  AskForConsent: "askForConsent",
  Disabled: "disabled",
  Enabled: "enabled",
} as const;
export type StorePaymentMethodMode2 =
  | (typeof StorePaymentMethodMode2)[keyof typeof StorePaymentMethodMode2]
  | (string & {});

export const storePaymentMethodMode2Schema: EnumSchema<StorePaymentMethodMode2> =
  s.enumOf<StorePaymentMethodMode2>(StorePaymentMethodMode2);
