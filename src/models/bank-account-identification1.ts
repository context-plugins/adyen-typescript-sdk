import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BankAccountIdentification1 = {
  type?: string;
};

export const bankAccountIdentification1Schema: Schema<BankAccountIdentification1> =
  s.object<BankAccountIdentification1>({
    type: s.optional(s.string()),
  });
