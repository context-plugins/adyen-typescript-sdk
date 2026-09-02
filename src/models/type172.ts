import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type172 = {
  BankAccount: "BankAccount",
  Document: "Document",
  LegalEntity: "LegalEntity",
  Product: "product",
} as const;
export type Type172 = (typeof Type172)[keyof typeof Type172] | (string & {});

export const type172Schema: EnumSchema<Type172> = s.enumOf<Type172>(Type172);
