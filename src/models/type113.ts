import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type113 = {
  BankTransfer: "bankTransfer",
  InternalTransfer: "internalTransfer",
  InternalDirectDebit: "internalDirectDebit",
} as const;
export type Type113 = (typeof Type113)[keyof typeof Type113] | (string & {});

export const type113Schema: EnumSchema<Type113> = s.enumOf<Type113>(Type113);
