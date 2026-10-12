import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateMerchantApiCredentialRequest = {
  /**
   * The list of [allowed
   * origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
   * for the new API credential.
   */
  allowedOrigins?: string[];
  /** Description of the API credential. */
  description?: string;
  /**
   * List of [roles](https://docs.adyen.com/development-resources/api-credentials#roles-1) for the
   * API credential. Only roles assigned to 'ws@Company.<CompanyName>' can be assigned to other API
   * credentials.
   */
  roles?: string[];
};

export const createMerchantApiCredentialRequestSchema: Schema<CreateMerchantApiCredentialRequest> =
  s.object<CreateMerchantApiCredentialRequest>({
    allowedOrigins: s.optional(s.array(s.string())),
    description: s.optional(s.string()),
    roles: s.optional(s.array(s.string())),
  });
