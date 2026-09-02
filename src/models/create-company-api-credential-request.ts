import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateCompanyApiCredentialRequest = {
  allowedOrigins?: string[];
  associatedMerchantAccounts?: string[];
  description?: string;
  roles?: string[];
};

export const createCompanyApiCredentialRequestSchema: Schema<CreateCompanyApiCredentialRequest> =
  s.object<CreateCompanyApiCredentialRequest>({
    allowedOrigins: s.optional(s.array(s.string())),
    associatedMerchantAccounts: s.optional(s.array(s.string())),
    description: s.optional(s.string()),
    roles: s.optional(s.array(s.string())),
  });
