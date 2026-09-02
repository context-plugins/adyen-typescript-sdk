import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status15Schema, type Status15 } from "./status15.js";
import { type192Schema, type Type192 } from "./type192.js";

export type ConfirmationTrackingData = {
  status: Status15;
  type: Type192;
};

export const confirmationTrackingDataSchema: Schema<ConfirmationTrackingData> =
  s.object<ConfirmationTrackingData>({
    status: status15Schema,
    type: type192Schema,
  });
