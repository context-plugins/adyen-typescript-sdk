import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WebData1 = {
  webAddress?: string;
  webAddressId?: string;
};

export const webData1Schema: Schema<WebData1> = s.object<WebData1>({
  webAddress: s.optional(s.string()),
  webAddressId: s.optional(s.string()),
});
