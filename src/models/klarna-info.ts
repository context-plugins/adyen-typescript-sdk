import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { regionSchema, type Region } from "./region.js";

export type KlarnaInfo = {
  autoCapture?: boolean;
  disputeEmail: string;
  region: Region;
  supportEmail: string;
};

export const klarnaInfoSchema: Schema<KlarnaInfo> = s.object<KlarnaInfo>({
  autoCapture: s.optional(s.boolean()),
  disputeEmail: s.string(),
  region: regionSchema,
  supportEmail: s.string(),
});
