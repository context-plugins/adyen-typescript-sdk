import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Result2 = {
  ActiveRecurringTokenExists: "ACTIVE_RECURRING_TOKEN_EXISTS",
  AlreadyProcessed: "ALREADY_PROCESSED",
  PaymentNotFound: "PAYMENT_NOT_FOUND",
  Success: "SUCCESS",
} as const;
export type Result2 = (typeof Result2)[keyof typeof Result2] | (string & {});

export const result2Schema: EnumSchema<Result2> = s.enumOf<Result2>(Result2);
