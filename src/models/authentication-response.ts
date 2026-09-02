import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AuthenticationResponse = {
  Y: "Y",
  N: "N",
  U: "U",
  A: "A",
} as const;
export type AuthenticationResponse =
  | (typeof AuthenticationResponse)[keyof typeof AuthenticationResponse]
  | (string & {});

export const authenticationResponseSchema: EnumSchema<AuthenticationResponse> =
  s.enumOf<AuthenticationResponse>(AuthenticationResponse);
