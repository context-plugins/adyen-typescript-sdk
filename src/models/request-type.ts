import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the type of request to which the rule applies. If not provided, by default, this is set
 * to **authorization**.
 *
 * Possible values: **authorization**, **authentication**, **tokenization**, **bankTransfer**.
 */
export const RequestType = {
  Authentication: "authentication",
  Authorization: "authorization",
  BankTransfer: "bankTransfer",
  Tokenization: "tokenization",
} as const;
export type RequestType = (typeof RequestType)[keyof typeof RequestType] | (string & {});

export const requestTypeSchema: EnumSchema<RequestType> = s.enumOf<RequestType>(RequestType);
