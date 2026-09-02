import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResultCode3 = {
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
export type ResultCode3 = (typeof ResultCode3)[keyof typeof ResultCode3] | (string & {});

export const resultCode3Schema: EnumSchema<ResultCode3> = s.enumOf<ResultCode3>(ResultCode3);
