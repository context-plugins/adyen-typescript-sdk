import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountVerificationCountry1Schema,
  type AccountVerificationCountry1,
} from "./account-verification-country1.js";
import { verifiedAccountSchema, type VerifiedAccount } from "./verified-account.js";

export type AccountVerificationReportResponse = {
  /** A list of bank accounts with their respective information. */
  accounts: VerifiedAccount[];
  /** The location where the third-party individual's bank account is registered. */
  country: AccountVerificationCountry1;
  /** The unique identifier for the specific report. */
  id: string;
};

export const accountVerificationReportResponseSchema: Schema<AccountVerificationReportResponse> =
  s.object<AccountVerificationReportResponse>({
    accounts: s.array(s.lazy(() => verifiedAccountSchema)),
    country: accountVerificationCountry1Schema,
    id: s.string(),
  });
