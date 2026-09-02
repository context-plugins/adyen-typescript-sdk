import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApplePayResponseInfo1 = {
  domains?: string[];
};

export const applePayResponseInfo1Schema: Schema<ApplePayResponseInfo1> = s.object<ApplePayResponseInfo1>({
  domains: s.optional(s.array(s.string())),
});
