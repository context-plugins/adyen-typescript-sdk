import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allowedOriginSchema, type AllowedOrigin } from "./allowed-origin.js";
import { apiCredentialLinks2Schema, type ApiCredentialLinks2 } from "./api-credential-links2.js";

export type CreateCompanyApiCredentialResponse = {
  /** References to resources linked to the API credential. */
  links?: ApiCredentialLinks2;
  /**
   * Indicates if the API credential is enabled. Must be set to **true** to use the credential in
   * your integration.
   */
  active: boolean;
  /**
   * List of IP addresses from which your client can make requests.
   *
   * If the list is empty, we allow requests from any IP. If the list is not empty and we get a
   * request from an IP which is not on the list, you get a security error.
   */
  allowedIpAddresses: string[];
  /**
   * List containing the [allowed
   * origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
   * linked to the API credential.
   */
  allowedOrigins?: AllowedOrigin[];
  /** The API key for the API credential that was created. */
  apiKey: string;
  /** List of merchant accounts that the API credential has access to. */
  associatedMerchantAccounts: string[];
  /**
   * Public key used for [client-side
   * authentication](https://docs.adyen.com/development-resources/client-side-authentication). The
   * client key is required for Drop-in and Components integrations.
   */
  clientKey: string;
  /** Description of the API credential. */
  description?: string;
  /** Unique identifier of the API credential. */
  id: string;
  /** The password for the API credential that was created. */
  password: string;
  /**
   * List of [roles](https://docs.adyen.com/development-resources/api-credentials#roles-1) for the
   * API credential.
   */
  roles: string[];
  /** The subject DN of the certificate issued by Adyen. */
  subjectDn?: string;
  /**
   * The name of the [API credential](https://docs.adyen.com/development-resources/api-credentials),
   * for example **ws@Company.TestCompany**.
   */
  username: string;
};

export const createCompanyApiCredentialResponseSchema: Schema<CreateCompanyApiCredentialResponse> =
  s.object<CreateCompanyApiCredentialResponse>({
    links: s.optional(s.lazy(() => apiCredentialLinks2Schema)),
    active: s.boolean(),
    allowedIpAddresses: s.array(s.string()),
    allowedOrigins: s.optional(s.array(s.lazy(() => allowedOriginSchema))),
    apiKey: s.string(),
    associatedMerchantAccounts: s.array(s.string()),
    clientKey: s.string(),
    description: s.optional(s.string()),
    id: s.string(),
    password: s.string(),
    roles: s.array(s.string()),
    subjectDn: s.optional(s.string()),
    username: s.string(),
    _keysMap: {
      links: "_links",
      subjectDn: "subjectDN",
    },
  });
