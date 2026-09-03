import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type311 = {
  BankAccount: "BankAccount",
  Document: "Document",
  LegalEntity: "LegalEntity",
  Product: "product",
} as const;
export type Type311 = (typeof Type311)[keyof typeof Type311] | (string & {});

export const type311Schema: EnumSchema<Type311> = s.enumOf<Type311>(Type311);
