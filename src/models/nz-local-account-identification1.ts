import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NzLocalAccountIdentification1 = {
  type: string;
  accountNumber: string;
};

export const nzLocalAccountIdentification1Schema: Schema<NzLocalAccountIdentification1> =
  s.object<NzLocalAccountIdentification1>({
    type: s.string(),
    accountNumber: s.string(),
  });
