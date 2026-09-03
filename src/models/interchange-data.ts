import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type InterchangeData = {
  interchangeAmount?: Amount17;
  interchangeRateIndicator?: string;
  type: "interchangeData";
};

export const interchangeDataSchema: Schema<InterchangeData> = s.object<InterchangeData>({
  interchangeAmount: s.optional(s.lazy(() => amount17Schema)),
  interchangeRateIndicator: s.optional(s.string()),
  type: s.literal("interchangeData"),
});
