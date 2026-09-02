import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CzLocalAccountIdentification1 = {
  type: string;
  accountNumber: string;
  bankCode: string;
};

export const czLocalAccountIdentification1Schema: Schema<CzLocalAccountIdentification1> =
  s.object<CzLocalAccountIdentification1>({
    type: s.string(),
    accountNumber: s.string(),
    bankCode: s.string(),
  });
