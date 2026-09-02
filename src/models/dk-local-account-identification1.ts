import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DkLocalAccountIdentification1 = {
  type: string;
  accountNumber: string;
  bankCode: string;
};

export const dkLocalAccountIdentification1Schema: Schema<DkLocalAccountIdentification1> =
  s.object<DkLocalAccountIdentification1>({
    type: s.string(),
    accountNumber: s.string(),
    bankCode: s.string(),
  });
