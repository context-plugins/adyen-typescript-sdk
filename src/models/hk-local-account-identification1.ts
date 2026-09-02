import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HkLocalAccountIdentification1 = {
  type: string;
  accountNumber: string;
  clearingCode: string;
};

export const hkLocalAccountIdentification1Schema: Schema<HkLocalAccountIdentification1> =
  s.object<HkLocalAccountIdentification1>({
    type: s.string(),
    accountNumber: s.string(),
    clearingCode: s.string(),
  });
