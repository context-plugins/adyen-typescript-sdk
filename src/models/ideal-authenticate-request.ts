import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdealAuthenticateRequest = {
  /** The unique identifier for an account holder. */
  accountHolderId: string;
  /** A payload provided by iDEAL to complete the authentication process. */
  payload: string;
};

export const idealAuthenticateRequestSchema: Schema<IdealAuthenticateRequest> =
  s.object<IdealAuthenticateRequest>({
    accountHolderId: s.string(),
    payload: s.string(),
  });
