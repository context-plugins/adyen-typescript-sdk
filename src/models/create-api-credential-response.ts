import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allowedOriginSchema, type AllowedOrigin } from "./allowed-origin.js";
import { apiCredentialLinks2Schema, type ApiCredentialLinks2 } from "./api-credential-links2.js";

export type CreateApiCredentialResponse = {
  links?: ApiCredentialLinks2;
  active: boolean;
  allowedIpAddresses: string[];
  allowedOrigins?: AllowedOrigin[];
  apiKey: string;
  clientKey: string;
  description?: string;
  id: string;
  password: string;
  roles: string[];
  subjectDn?: string;
  username: string;
};

export const createApiCredentialResponseSchema: Schema<CreateApiCredentialResponse> =
  s.object<CreateApiCredentialResponse>({
    links: s.optional(s.lazy(() => apiCredentialLinks2Schema)),
    active: s.boolean(),
    allowedIpAddresses: s.array(s.string()),
    allowedOrigins: s.optional(s.array(s.lazy(() => allowedOriginSchema))),
    apiKey: s.string(),
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
