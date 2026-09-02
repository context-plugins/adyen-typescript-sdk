import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayMeInfo1 = {
  displayName: string;
  logo: string;
  supportEmail: string;
};

export const payMeInfo1Schema: Schema<PayMeInfo1> = s.object<PayMeInfo1>({
  displayName: s.string(),
  logo: s.string(),
  supportEmail: s.string(),
});
