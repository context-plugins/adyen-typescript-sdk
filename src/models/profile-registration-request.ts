import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProfileRegistrationRequest = {
  accountHolderId: string;
  paymentInstrumentIds: string[];
};

export const profileRegistrationRequestSchema: Schema<ProfileRegistrationRequest> =
  s.object<ProfileRegistrationRequest>({
    accountHolderId: s.string(),
    paymentInstrumentIds: s.array(s.string()),
  });
