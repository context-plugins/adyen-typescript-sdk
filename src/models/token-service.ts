import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The name of the token service. */
export const TokenService = {
  Visatokenservice: "VISATOKENSERVICE",
  Mctokenservice: "MCTOKENSERVICE",
  Amextokenservice: "AMEXTOKENSERVICE",
  TokenSharing: "TOKEN_SHARING",
} as const;
export type TokenService = (typeof TokenService)[keyof typeof TokenService] | (string & {});

export const tokenServiceSchema: EnumSchema<TokenService> = s.enumOf<TokenService>(TokenService);
