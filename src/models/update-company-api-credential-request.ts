import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateCompanyApiCredentialRequest = {
  /** Indicates if the API credential is enabled. */
  active?: boolean;
  /**
   * The new list of [allowed
   * origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
   * for the API credential.
   */
  allowedOrigins?: string[];
  /** List of merchant accounts that the API credential has access to. */
  associatedMerchantAccounts?: string[];
  /** Description of the API credential. */
  description?: string;
  /**
   * List of [roles](https://docs.adyen.com/development-resources/api-credentials#roles-1) for the
   * API credential. Only roles assigned to 'ws@Company.<CompanyName>' can be assigned to other API
   * credentials.
   */
  roles?: string[];
  /** The subject DN of the certificate issued by Adyen. */
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
