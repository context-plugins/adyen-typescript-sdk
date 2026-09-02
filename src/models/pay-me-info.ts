import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayMeInfo = {
  displayName: string;
  logo: string;
  supportEmail: string;
};

export const payMeInfoSchema: Schema<PayMeInfo> = s.object<PayMeInfo>({
  displayName: s.string(),
  logo: s.string(),
  supportEmail: s.string(),
});
