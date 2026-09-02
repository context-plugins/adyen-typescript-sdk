import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubMerchantData1 = {
  email: string;
  id: string;
  mcc: string;
  name: string;
};

export const subMerchantData1Schema: Schema<SubMerchantData1> = s.object<SubMerchantData1>({
  email: s.string(),
  id: s.string(),
  mcc: s.string(),
  name: s.string(),
});
