import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApplePayInfo1 = {
  domains: string[];
};

export const applePayInfo1Schema: Schema<ApplePayInfo1> = s.object<ApplePayInfo1>({
  domains: s.array(s.string()),
});
