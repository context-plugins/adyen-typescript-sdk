import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthenticationResultRequest = {
  merchantAccount: string;
  pspReference: string;
};

export const authenticationResultRequestSchema: Schema<AuthenticationResultRequest> =
  s.object<AuthenticationResultRequest>({
    merchantAccount: s.string(),
    pspReference: s.string(),
  });
