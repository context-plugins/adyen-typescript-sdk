import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RecurringProcessingModel1 = {
  CardOnFile: "CardOnFile",
  Subscription: "Subscription",
  UnscheduledCardOnFile: "UnscheduledCardOnFile",
} as const;
export type RecurringProcessingModel1 =
  | (typeof RecurringProcessingModel1)[keyof typeof RecurringProcessingModel1]
  | (string & {});

export const recurringProcessingModel1Schema: EnumSchema<RecurringProcessingModel1> =
  s.enumOf<RecurringProcessingModel1>(RecurringProcessingModel1);
