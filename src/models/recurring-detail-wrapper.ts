import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recurringDetailSchema, type RecurringDetail } from "./recurring-detail.js";

export type RecurringDetailWrapper = {
  recurringDetail?: RecurringDetail;
};

export const recurringDetailWrapperSchema: Schema<RecurringDetailWrapper> = s.object<RecurringDetailWrapper>({
  recurringDetail: s.optional(s.lazy(() => recurringDetailSchema)),
  _keysMap: {
    recurringDetail: "RecurringDetail",
  },
});
