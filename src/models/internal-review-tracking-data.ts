import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reason11Schema, type Reason11 } from "./reason11.js";
import { status44Schema, type Status44 } from "./status44.js";
import { type292Schema, type Type292 } from "./type292.js";

export type InternalReviewTrackingData = {
  reason?: Reason11;
  status: Status44;
  type: Type292;
};

export const internalReviewTrackingDataSchema: Schema<InternalReviewTrackingData> =
  s.object<InternalReviewTrackingData>({
    reason: s.optional(s.lazy(() => reason11Schema)),
    status: status44Schema,
    type: type292Schema,
  });
