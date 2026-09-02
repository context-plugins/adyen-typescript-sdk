import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataRetry = {
  retryChainAttemptNumber?: string;
  retryOrderAttemptNumber?: string;
  retrySkipRetry?: string;
};

export const additionalDataRetrySchema: Schema<AdditionalDataRetry> = s.object<AdditionalDataRetry>({
  retryChainAttemptNumber: s.optional(s.string()),
  retryOrderAttemptNumber: s.optional(s.string()),
  retrySkipRetry: s.optional(s.string()),
  _keysMap: {
    retryChainAttemptNumber: "retry.chainAttemptNumber",
    retryOrderAttemptNumber: "retry.orderAttemptNumber",
    retrySkipRetry: "retry.skipRetry",
  },
});
