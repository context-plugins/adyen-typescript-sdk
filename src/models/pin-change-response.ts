import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status131Schema, type Status131 } from "./status131.js";

export type PinChangeResponse = {
  status: Status131;
};

export const pinChangeResponseSchema: Schema<PinChangeResponse> = s.object<PinChangeResponse>({
  status: status131Schema,
});
