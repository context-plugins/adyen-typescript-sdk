import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CashAppUpdateInfo1 = {
  logoUrl?: string;
  merchantName?: string;
};

export const cashAppUpdateInfo1Schema: Schema<CashAppUpdateInfo1> = s.object<CashAppUpdateInfo1>({
  logoUrl: s.optional(s.string()),
  merchantName: s.optional(s.string()),
});
