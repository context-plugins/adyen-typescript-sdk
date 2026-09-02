import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountVerificationCountry2Schema,
  type AccountVerificationCountry2,
} from "./account-verification-country2.js";

export type AccountVerificationRoutesRequest = {
  country: AccountVerificationCountry2;
  locale?: string;
  redirectUrl: string;
  state?: string;
};

export const accountVerificationRoutesRequestSchema: Schema<AccountVerificationRoutesRequest> =
  s.object<AccountVerificationRoutesRequest>({
    country: accountVerificationCountry2Schema,
    locale: s.optional(s.string()),
    redirectUrl: s.string(),
    state: s.optional(s.string()),
  });
