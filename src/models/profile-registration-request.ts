import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProfileRegistrationRequest = {
  /** The unique identifier of the account holder. */
  accountHolderId: string;
  /** The unique identifiers of the payment instruments to be associated with the iDEAL profile. */
  paymentInstrumentIds: string[];
};

export const profileRegistrationRequestSchema: Schema<ProfileRegistrationRequest> =
  s.object<ProfileRegistrationRequest>({
    accountHolderId: s.string(),
    paymentInstrumentIds: s.array(s.string()),
  });
