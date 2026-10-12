import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Condition that has produced an error on the processing of a message request. Returned if Result
 * is not Success. Possible values:
 * * **Aborted**
 * * **Busy**
 * * **Cancel**
 * * **DeviceOut**
 * * **InProgress**
 * * **InsertedCard**
 * * **InvalidCard**
 * * **LoggedOut**
 * * **MessageFormat**
 * * **NotAllowed**
 * * **NotFound**
 * * **PaymentRestriction**
 * * **Refusal**
 * * **UnavailableDevice**
 * * **UnavailableService**
 * * **UnreachableHost**
 * * **WrongPIN**
 */
export const ErrorCondition1 = {
  Aborted: "Aborted",
  Busy: "Busy",
  Cancel: "Cancel",
  DeviceOut: "DeviceOut",
  InsertedCard: "InsertedCard",
  InProgress: "InProgress",
  LoggedOut: "LoggedOut",
  MessageFormat: "MessageFormat",
  NotAllowed: "NotAllowed",
  NotFound: "NotFound",
  PaymentRestriction: "PaymentRestriction",
  Refusal: "Refusal",
  UnavailableDevice: "UnavailableDevice",
  UnavailableService: "UnavailableService",
  InvalidCard: "InvalidCard",
  UnreachableHost: "UnreachableHost",
  WrongPin: "WrongPIN",
} as const;
export type ErrorCondition1 = (typeof ErrorCondition1)[keyof typeof ErrorCondition1] | (string & {});

export const errorCondition1Schema: EnumSchema<ErrorCondition1> = s.enumOf<ErrorCondition1>(ErrorCondition1);
