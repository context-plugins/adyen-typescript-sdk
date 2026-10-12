import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WebData = {
  /** The URL of the website or the app store URL. */
  webAddress?: string;
  /** The unique identifier of the web address. */
  webAddressId?: string;
};

export const webDataSchema: Schema<WebData> = s.object<WebData>({
  webAddress: s.optional(s.string()),
  webAddressId: s.optional(s.string()),
});
