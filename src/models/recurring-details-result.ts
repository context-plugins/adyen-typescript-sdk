import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recurringDetailWrapperSchema, type RecurringDetailWrapper } from "./recurring-detail-wrapper.js";

export type RecurringDetailsResult = {
  creationDate?: Date;
  details?: RecurringDetailWrapper[];
  lastKnownShopperEmail?: string;
  shopperReference?: string;
};

export const recurringDetailsResultSchema: Schema<RecurringDetailsResult> = s.object<RecurringDetailsResult>({
  creationDate: s.optional(s.dateTime()),
  details: s.optional(s.array(s.lazy(() => recurringDetailWrapperSchema))),
  lastKnownShopperEmail: s.optional(s.string()),
  shopperReference: s.optional(s.string()),
});
