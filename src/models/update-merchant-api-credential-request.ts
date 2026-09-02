import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateMerchantApiCredentialRequest = {
  active?: boolean;
  allowedOrigins?: string[];
  description?: string;
  roles?: string[];
  subjectDn?: string;
};

export const updateMerchantApiCredentialRequestSchema: Schema<UpdateMerchantApiCredentialRequest> =
  s.object<UpdateMerchantApiCredentialRequest>({
    active: s.optional(s.boolean()),
    allowedOrigins: s.optional(s.array(s.string())),
    description: s.optional(s.string()),
    roles: s.optional(s.array(s.string())),
    subjectDn: s.optional(s.string()),
    _keysMap: {
      subjectDn: "subjectDN",
    },
  });
