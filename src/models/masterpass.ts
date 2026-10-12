import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { Type35, type35Schema } from "./type35.js";

export type Masterpass = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /**
   * The funding source that should be used when multiple sources are available. For Brazilian combo
   * cards, by default the funding source is credit. To use debit, set this value to **debit**.
   */
  fundingSource?: FundingSource;
  /** The Masterpass transaction ID. */
  masterpassTransactionId: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** **masterpass** @default Type35.Masterpass */
  type?: Type35;
};

export const masterpassSchema: Schema<Masterpass> = s.object<Masterpass>({
  checkoutAttemptId: s.optional(s.string()),
  fundingSource: s.optional(s.lazy(() => fundingSourceSchema)),
  masterpassTransactionId: s.string(),
  sdkData: s.optional(s.string()),
  type: s.defaulted(type35Schema, Type35.Masterpass),
});
