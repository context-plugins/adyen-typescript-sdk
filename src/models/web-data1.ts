import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The website and app URL of the legal entity. */
export type WebData1 = {
  /** The URL of the website or the app store URL. */
  webAddress?: string;
  /** The unique identifier of the web address. */
  webAddressId?: string;
};

export const webData1Schema: Schema<WebData1> = s.object<WebData1>({
  webAddress: s.optional(s.string()),
  webAddressId: s.optional(s.string()),
});
