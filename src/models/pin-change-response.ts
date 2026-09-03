import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status13Schema, type Status13 } from "./status13.js";

export type PinChangeResponse = {
  status: Status13;
};

export const pinChangeResponseSchema: Schema<PinChangeResponse> = s.object<PinChangeResponse>({
  status: status13Schema,
});
