import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { type47Schema, type Type47 } from "./type47.js";

export type Masterpass = {
  checkoutAttemptId?: string;
  fundingSource?: FundingSource;
  masterpassTransactionId: string;
  sdkData?: string;
  type?: Type47;
};

export const masterpassSchema: Schema<Masterpass> = s.object<Masterpass>({
  checkoutAttemptId: s.optional(s.string()),
  fundingSource: s.optional(s.lazy(() => fundingSourceSchema)),
  masterpassTransactionId: s.string(),
  sdkData: s.optional(s.string()),
  type: s.optional(s.lazy(() => type47Schema)),
});
