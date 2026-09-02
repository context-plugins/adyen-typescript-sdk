import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubMerchantData = {
  email: string;
  id: string;
  mcc: string;
  name: string;
};

export const subMerchantDataSchema: Schema<SubMerchantData> = s.object<SubMerchantData>({
  email: s.string(),
  id: s.string(),
  mcc: s.string(),
  name: s.string(),
});
