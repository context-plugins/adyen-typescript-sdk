import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BrowserInfo = {
  acceptHeader: string;
  colorDepth: number;
  javaEnabled: boolean;
  javaScriptEnabled?: boolean;
  language: string;
  screenHeight: number;
  screenWidth: number;
  timeZoneOffset: number;
  userAgent: string;
};

export const browserInfoSchema: Schema<BrowserInfo> = s.object<BrowserInfo>({
  acceptHeader: s.string(),
  colorDepth: s.number(),
  javaEnabled: s.boolean(),
  javaScriptEnabled: s.optional(s.boolean()),
  language: s.string(),
  screenHeight: s.number(),
  screenWidth: s.number(),
  timeZoneOffset: s.number(),
  userAgent: s.string(),
});
