import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountVerificationCountry1Schema,
  type AccountVerificationCountry1,
} from "./account-verification-country1.js";
import { verifiedAccountSchema, type VerifiedAccount } from "./verified-account.js";

export type AccountVerificationReportResponse = {
  accounts: VerifiedAccount[];
  country: AccountVerificationCountry1;
  id: string;
};

export const accountVerificationReportResponseSchema: Schema<AccountVerificationReportResponse> =
  s.object<AccountVerificationReportResponse>({
    accounts: s.array(s.lazy(() => verifiedAccountSchema)),
    country: accountVerificationCountry1Schema,
    id: s.string(),
  });
