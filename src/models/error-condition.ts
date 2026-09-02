import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ErrorCondition = {
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
export type ErrorCondition = (typeof ErrorCondition)[keyof typeof ErrorCondition] | (string & {});

export const errorConditionSchema: EnumSchema<ErrorCondition> = s.enumOf<ErrorCondition>(ErrorCondition);
