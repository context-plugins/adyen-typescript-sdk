import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApplePayInfo = {
  domains: string[];
};

export const applePayInfoSchema: Schema<ApplePayInfo> = s.object<ApplePayInfo>({
  domains: s.array(s.string()),
});
