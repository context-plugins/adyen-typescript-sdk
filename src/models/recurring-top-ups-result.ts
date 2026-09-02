import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { recurringTopUpSchema, type RecurringTopUp } from "./recurring-top-up.js";

export type RecurringTopUpsResult = {
  link: Link;
  recurringTopUps: RecurringTopUp[];
};

export const recurringTopUpsResultSchema: Schema<RecurringTopUpsResult> = s.object<RecurringTopUpsResult>({
  link: linkSchema,
  recurringTopUps: s.array(s.lazy(() => recurringTopUpSchema)),
});
