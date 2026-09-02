import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApplePayResponseInfo = {
  domains?: string[];
};

export const applePayResponseInfoSchema: Schema<ApplePayResponseInfo> = s.object<ApplePayResponseInfo>({
  domains: s.optional(s.array(s.string())),
});
