import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UkLocalAccountIdentification1 = {
  type: string;
  accountNumber: string;
  sortCode: string;
};

export const ukLocalAccountIdentification1Schema: Schema<UkLocalAccountIdentification1> =
  s.object<UkLocalAccountIdentification1>({
    type: s.string(),
    accountNumber: s.string(),
    sortCode: s.string(),
  });
