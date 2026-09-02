import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BcmcInfo = {
  enableBcmcMobile?: boolean;
};

export const bcmcInfoSchema: Schema<BcmcInfo> = s.object<BcmcInfo>({
  enableBcmcMobile: s.optional(s.boolean()),
});
