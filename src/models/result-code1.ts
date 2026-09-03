import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResultCode1 = {
  AuthenticationFinished: "AuthenticationFinished",
  AuthenticationNotRequired: "AuthenticationNotRequired",
  Authorised: "Authorised",
  Cancelled: "Cancelled",
  ChallengeShopper: "ChallengeShopper",
  Error: "Error",
  IdentifyShopper: "IdentifyShopper",
  PartiallyAuthorised: "PartiallyAuthorised",
  Pending: "Pending",
  PresentToShopper: "PresentToShopper",
  Received: "Received",
  RedirectShopper: "RedirectShopper",
  Refused: "Refused",
  Success: "Success",
} as const;
export type ResultCode1 = (typeof ResultCode1)[keyof typeof ResultCode1] | (string & {});

export const resultCode1Schema: EnumSchema<ResultCode1> = s.enumOf<ResultCode1>(ResultCode1);
