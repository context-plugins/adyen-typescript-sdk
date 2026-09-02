import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuLocalAccountIdentification1 = {
  type: string;
  accountNumber: string;
  bsbCode: string;
};

export const auLocalAccountIdentification1Schema: Schema<AuLocalAccountIdentification1> =
  s.object<AuLocalAccountIdentification1>({
    type: s.string(),
    accountNumber: s.string(),
    bsbCode: s.string(),
  });
