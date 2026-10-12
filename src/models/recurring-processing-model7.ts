import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The processing model used for the recurring transaction. */
export const RecurringProcessingModel7 = {
  CardOnFile: "CardOnFile",
  Subscription: "Subscription",
  UnscheduledCardOnFile: "UnscheduledCardOnFile",
} as const;
export type RecurringProcessingModel7 =
  | (typeof RecurringProcessingModel7)[keyof typeof RecurringProcessingModel7]
  | (string & {});

export const recurringProcessingModel7Schema: EnumSchema<RecurringProcessingModel7> =
  s.enumOf<RecurringProcessingModel7>(RecurringProcessingModel7);
