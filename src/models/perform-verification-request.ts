import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountStateTypeSchema, type AccountStateType } from "./account-state-type.js";

export type PerformVerificationRequest = {
  /** The code of the account holder to verify. */
  accountHolderCode: string;
  /** The state required for the account holder. > Permitted values: `Processing`, `Payout`. */
  accountStateType: AccountStateType;
  /** The tier required for the account holder. */
  tier: number;
};

export const performVerificationRequestSchema: Schema<PerformVerificationRequest> =
  s.object<PerformVerificationRequest>({
    accountHolderCode: s.string(),
    accountStateType: accountStateTypeSchema,
    tier: s.int(),
  });
