import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth, apiKeyQueryAuth, basicAuth } from "./core/auth/schemes.js";

export type AuthSchemes = {
  readonly apiKeyAuth: AuthScheme;
  readonly basicAuth: AuthScheme;
  readonly clientKey: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiKeyAuth: apiKeyHeaderAuth({ name: "X-API-Key", token: options.apiKeyAuth }),
    basicAuth: basicAuth(options.basicAuth),
    clientKey: apiKeyQueryAuth({ name: "clientKey", token: options.clientKey }),
  };
}
