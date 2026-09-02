import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { region1Schema, type Region1 } from "./region1.js";

export type KlarnaResponseInfo1 = {
  autoCapture?: boolean;
  disputeEmail?: string;
  region?: Region1;
  supportEmail?: string;
};

export const klarnaResponseInfo1Schema: Schema<KlarnaResponseInfo1> = s.object<KlarnaResponseInfo1>({
  autoCapture: s.optional(s.boolean()),
  disputeEmail: s.optional(s.string()),
  region: s.optional(s.lazy(() => region1Schema)),
  supportEmail: s.optional(s.string()),
});
