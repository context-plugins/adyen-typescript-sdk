import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if the details of the payment method will be stored for the shopper. Possible values:
 * * **disabled** – No details will be stored (default).
 * * **askForConsent** – If the `shopperReference` is provided, the Drop-in/Component shows a
 *   checkbox where the shopper can select to store their payment details for card payments.
 * * **enabled** – If the `shopperReference` is provided, the details will be stored without asking
 *   the shopper for consent.
 */
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
