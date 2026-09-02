import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";

export type ScheduleAccountUpdaterRequest = {
  additionalData?: Record<string, string>;
  card?: Card;
  merchantAccount: string;
  reference: string;
  selectedRecurringDetailReference?: string;
  shopperReference?: string;
};

export const scheduleAccountUpdaterRequestSchema: Schema<ScheduleAccountUpdaterRequest> =
  s.object<ScheduleAccountUpdaterRequest>({
    additionalData: s.optional(s.record(s.string(), s.string())),
    card: s.optional(s.lazy(() => cardSchema)),
    merchantAccount: s.string(),
    reference: s.string(),
    selectedRecurringDetailReference: s.optional(s.string()),
    shopperReference: s.optional(s.string()),
  });
