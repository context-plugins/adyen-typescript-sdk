import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WebData = {
  webAddress?: string;
  webAddressId?: string;
};

export const webDataSchema: Schema<WebData> = s.object<WebData>({
  webAddress: s.optional(s.string()),
  webAddressId: s.optional(s.string()),
});
