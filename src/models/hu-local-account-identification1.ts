import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HuLocalAccountIdentification1 = {
  type: string;
  accountNumber: string;
};

export const huLocalAccountIdentification1Schema: Schema<HuLocalAccountIdentification1> =
  s.object<HuLocalAccountIdentification1>({
    type: s.string(),
    accountNumber: s.string(),
  });
