import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateCompanyApiCredentialRequest = {
  active?: boolean;
  allowedOrigins?: string[];
  associatedMerchantAccounts?: string[];
  description?: string;
  roles?: string[];
  subjectDn?: string;
};

export const updateCompanyApiCredentialRequestSchema: Schema<UpdateCompanyApiCredentialRequest> =
  s.object<UpdateCompanyApiCredentialRequest>({
    active: s.optional(s.boolean()),
    allowedOrigins: s.optional(s.array(s.string())),
    associatedMerchantAccounts: s.optional(s.array(s.string())),
    description: s.optional(s.string()),
    roles: s.optional(s.array(s.string())),
    subjectDn: s.optional(s.string()),
    _keysMap: {
      subjectDn: "subjectDN",
    },
  });
