import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dayOfWeekSchema, type DayOfWeek } from "./day-of-week.js";
import { duration1Schema, type Duration1 } from "./duration1.js";
import { type131Schema, type Type131 } from "./type131.js";

export type TransactionRuleInterval = {
  dayOfMonth?: number;
  dayOfWeek?: DayOfWeek;
  duration?: Duration1;
  timeOfDay?: string;
  timeZone?: string;
  type: Type131;
};

export const transactionRuleIntervalSchema: Schema<TransactionRuleInterval> =
  s.object<TransactionRuleInterval>({
    dayOfMonth: s.optional(s.number()),
    dayOfWeek: s.optional(s.lazy(() => dayOfWeekSchema)),
    duration: s.optional(s.lazy(() => duration1Schema)),
    timeOfDay: s.optional(s.string()),
    timeZone: s.optional(s.string()),
    type: type131Schema,
  });
