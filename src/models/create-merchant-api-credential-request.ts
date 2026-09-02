import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateMerchantApiCredentialRequest = {
  allowedOrigins?: string[];
  description?: string;
  roles?: string[];
};

export const createMerchantApiCredentialRequestSchema: Schema<CreateMerchantApiCredentialRequest> =
  s.object<CreateMerchantApiCredentialRequest>({
    allowedOrigins: s.optional(s.array(s.string())),
    description: s.optional(s.string()),
    roles: s.optional(s.array(s.string())),
  });
