import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AttemptAuthentication = {
  Always: "always",
  Never: "never",
} as const;
export type AttemptAuthentication =
  | (typeof AttemptAuthentication)[keyof typeof AttemptAuthentication]
  | (string & {});

export const attemptAuthenticationSchema: EnumSchema<AttemptAuthentication> =
  s.enumOf<AttemptAuthentication>(AttemptAuthentication);
