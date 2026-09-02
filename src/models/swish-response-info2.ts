import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SwishResponseInfo2 = {
  swishNumber?: string;
};

export const swishResponseInfo2Schema: Schema<SwishResponseInfo2> = s.object<SwishResponseInfo2>({
  swishNumber: s.optional(s.string()),
});
