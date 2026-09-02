import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RecurringProcessingModel = {
  CardOnFile: "CardOnFile",
  Subscription: "Subscription",
  UnscheduledCardOnFile: "UnscheduledCardOnFile",
} as const;
export type RecurringProcessingModel =
  | (typeof RecurringProcessingModel)[keyof typeof RecurringProcessingModel]
  | (string & {});

export const recurringProcessingModelSchema: EnumSchema<RecurringProcessingModel> =
  s.enumOf<RecurringProcessingModel>(RecurringProcessingModel);
