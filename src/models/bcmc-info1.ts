import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BcmcInfo1 = {
  enableBcmcMobile?: boolean;
};

export const bcmcInfo1Schema: Schema<BcmcInfo1> = s.object<BcmcInfo1>({
  enableBcmcMobile: s.optional(s.boolean()),
});
