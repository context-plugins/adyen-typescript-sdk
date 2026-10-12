import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Defines a recurring payment type. Required when `storePaymentMethodMode` is set to
 * **askForConsent** or **enabled**. Possible values:
 * * **Subscription** – A transaction for a fixed or variable amount, which follows a fixed
 *   schedule.
 * * **CardOnFile** – With a card-on-file (CoF) transaction, card details are stored to enable
 *   one-click or omnichannel journeys, or simply to streamline the checkout process. Any
 *   subscription not following a fixed schedule is also considered a card-on-file transaction.
 * * **UnscheduledCardOnFile** – An unscheduled card-on-file (UCoF) transaction is a transaction
 *   that occurs on a non-fixed schedule and/or has variable amounts. For example, automatic top-ups
 *   when a cardholder's balance drops below a certain amount.
 */
export const RecurringProcessingModel4 = {
  CardOnFile: "CardOnFile",
  Subscription: "Subscription",
  UnscheduledCardOnFile: "UnscheduledCardOnFile",
} as const;
export type RecurringProcessingModel4 =
  | (typeof RecurringProcessingModel4)[keyof typeof RecurringProcessingModel4]
  | (string & {});

export const recurringProcessingModel4Schema: EnumSchema<RecurringProcessingModel4> =
  s.enumOf<RecurringProcessingModel4>(RecurringProcessingModel4);
