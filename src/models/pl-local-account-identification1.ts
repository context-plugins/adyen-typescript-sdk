import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlLocalAccountIdentification1 = {
  type: string;
  accountNumber: string;
};

export const plLocalAccountIdentification1Schema: Schema<PlLocalAccountIdentification1> =
  s.object<PlLocalAccountIdentification1>({
    type: s.string(),
    accountNumber: s.string(),
  });
