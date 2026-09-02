import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountStateTypeSchema, type AccountStateType } from "./account-state-type.js";

export type PerformVerificationRequest = {
  accountHolderCode: string;
  accountStateType: AccountStateType;
  tier: number;
};

export const performVerificationRequestSchema: Schema<PerformVerificationRequest> =
  s.object<PerformVerificationRequest>({
    accountHolderCode: s.string(),
    accountStateType: accountStateTypeSchema,
    tier: s.number(),
  });
