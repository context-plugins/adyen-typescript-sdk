import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recurringDetailWrapperSchema, type RecurringDetailWrapper } from "./recurring-detail-wrapper.js";

export type RecurringDetailsResult = {
  /** The date when the recurring details were created. */
  creationDate?: Date;
  /** Payment details stored for recurring payments. */
  details?: RecurringDetailWrapper[];
  /** The most recent email for this shopper (if available). */
  lastKnownShopperEmail?: string;
  /** The reference you use to uniquely identify the shopper (e.g. user ID or account ID). */
  shopperReference?: string;
};

export const recurringDetailsResultSchema: Schema<RecurringDetailsResult> = s.object<RecurringDetailsResult>({
  creationDate: s.optional(s.dateTime()),
  details: s.optional(s.array(s.lazy(() => recurringDetailWrapperSchema))),
  lastKnownShopperEmail: s.optional(s.string()),
  shopperReference: s.optional(s.string()),
});
