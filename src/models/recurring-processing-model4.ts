import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
