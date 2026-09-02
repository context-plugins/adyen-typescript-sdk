import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { regionSchema, type Region } from "./region.js";

export type KlarnaInfo1 = {
  autoCapture?: boolean;
  disputeEmail: string;
  region: Region;
  supportEmail: string;
};

export const klarnaInfo1Schema: Schema<KlarnaInfo1> = s.object<KlarnaInfo1>({
  autoCapture: s.optional(s.boolean()),
  disputeEmail: s.string(),
  region: regionSchema,
  supportEmail: s.string(),
});
