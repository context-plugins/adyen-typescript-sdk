import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayToInfo = {
  merchantName: string;
  payToPurpose: string;
};

export const payToInfoSchema: Schema<PayToInfo> = s.object<PayToInfo>({
  merchantName: s.string(),
  payToPurpose: s.string(),
});
