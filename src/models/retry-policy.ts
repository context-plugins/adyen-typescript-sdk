import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** When set to true, you can retry for failed recurring payments. The default value is true. */
export const RetryPolicy = {
  True: "true",
  False: "false",
} as const;
export type RetryPolicy = (typeof RetryPolicy)[keyof typeof RetryPolicy] | (string & {});

export const retryPolicySchema: EnumSchema<RetryPolicy> = s.enumOf<RetryPolicy>(RetryPolicy);
