import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allowedOriginSchema, type AllowedOrigin } from "./allowed-origin.js";
import { apiCredentialLinks2Schema, type ApiCredentialLinks2 } from "./api-credential-links2.js";

export type MeApiCredential = {
  links?: ApiCredentialLinks2;
  active: boolean;
  allowedIpAddresses: string[];
  allowedOrigins?: AllowedOrigin[];
  clientKey: string;
  companyName?: string;
  description?: string;
  id: string;
  roles: string[];
  subjectDn?: string;
  username: string;
};

export const meApiCredentialSchema: Schema<MeApiCredential> = s.object<MeApiCredential>({
  links: s.optional(s.lazy(() => apiCredentialLinks2Schema)),
  active: s.boolean(),
  allowedIpAddresses: s.array(s.string()),
  allowedOrigins: s.optional(s.array(s.lazy(() => allowedOriginSchema))),
  clientKey: s.string(),
  companyName: s.optional(s.string()),
  description: s.optional(s.string()),
  id: s.string(),
  roles: s.array(s.string()),
  subjectDn: s.optional(s.string()),
  username: s.string(),
  _keysMap: {
    links: "_links",
    subjectDn: "subjectDN",
  },
});
