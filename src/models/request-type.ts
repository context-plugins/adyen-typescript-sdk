import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RequestType = {
  Authentication: "authentication",
  Authorization: "authorization",
  BankTransfer: "bankTransfer",
  Tokenization: "tokenization",
} as const;
export type RequestType = (typeof RequestType)[keyof typeof RequestType] | (string & {});

export const requestTypeSchema: EnumSchema<RequestType> = s.enumOf<RequestType>(RequestType);
