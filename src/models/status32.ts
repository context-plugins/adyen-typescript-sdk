import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status32 = {
  AwaitingData: "AWAITING_DATA",
  DataProvided: "DATA_PROVIDED",
  Failed: "FAILED",
  InvalidData: "INVALID_DATA",
  Passed: "PASSED",
  Pending: "PENDING",
  PendingReview: "PENDING_REVIEW",
  RetryLimitReached: "RETRY_LIMIT_REACHED",
  Unchecked: "UNCHECKED",
} as const;
export type Status32 = (typeof Status32)[keyof typeof Status32] | (string & {});

export const status32Schema: EnumSchema<Status32> = s.enumOf<Status32>(Status32);
