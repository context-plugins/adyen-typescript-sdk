import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NoLocalAccountIdentification1 = {
  type: string;
  accountNumber: string;
};

export const noLocalAccountIdentification1Schema: Schema<NoLocalAccountIdentification1> =
  s.object<NoLocalAccountIdentification1>({
    type: s.string(),
    accountNumber: s.string(),
  });
