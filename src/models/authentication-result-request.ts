import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthenticationResultRequest = {
  /** The merchant account identifier, with which the authentication was processed. */
  merchantAccount: string;
  /** The pspReference identifier for the transaction. */
  pspReference: string;
};

export const authenticationResultRequestSchema: Schema<AuthenticationResultRequest> =
  s.object<AuthenticationResultRequest>({
    merchantAccount: s.string(),
    pspReference: s.string(),
  });
