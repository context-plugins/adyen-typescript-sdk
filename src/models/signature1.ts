import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Signature1 = {
  askSignatureOnScreen?: boolean;
  deviceName?: string;
  deviceSlogan?: string;
  skipSignature?: boolean;
};

export const signature1Schema: Schema<Signature1> = s.object<Signature1>({
  askSignatureOnScreen: s.optional(s.boolean()),
  deviceName: s.optional(s.string()),
  deviceSlogan: s.optional(s.string()),
  skipSignature: s.optional(s.boolean()),
});
