import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type342 = {
  BankTransfer: "bankTransfer",
  InternalTransfer: "internalTransfer",
  InternalDirectDebit: "internalDirectDebit",
} as const;
export type Type342 = (typeof Type342)[keyof typeof Type342] | (string & {});

export const type342Schema: EnumSchema<Type342> = s.enumOf<Type342>(Type342);
