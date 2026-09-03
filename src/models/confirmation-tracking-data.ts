import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status15Schema, type Status15 } from "./status15.js";

export type ConfirmationTrackingData = {
  status: Status15;
  type: "confirmation";
};

export const confirmationTrackingDataSchema: Schema<ConfirmationTrackingData> =
  s.object<ConfirmationTrackingData>({
    status: status15Schema,
    type: s.literal("confirmation"),
  });
