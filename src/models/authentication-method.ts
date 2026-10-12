import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Allowed authentication methods: Magswipe, Manual Entry. */
export const AuthenticationMethod = {
  Magswipe: "MAGSWIPE",
  Mke: "MKE",
} as const;
export type AuthenticationMethod =
  | (typeof AuthenticationMethod)[keyof typeof AuthenticationMethod]
  | (string & {});

export const authenticationMethodSchema: EnumSchema<AuthenticationMethod> =
  s.enumOf<AuthenticationMethod>(AuthenticationMethod);
