import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayToInfo1 = {
  merchantName: string;
  payToPurpose: string;
};

export const payToInfo1Schema: Schema<PayToInfo1> = s.object<PayToInfo1>({
  merchantName: s.string(),
  payToPurpose: s.string(),
});
