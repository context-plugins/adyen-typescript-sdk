import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CashAppUpdateInfo = {
  logoUrl?: string;
  merchantName?: string;
};

export const cashAppUpdateInfoSchema: Schema<CashAppUpdateInfo> = s.object<CashAppUpdateInfo>({
  logoUrl: s.optional(s.string()),
  merchantName: s.optional(s.string()),
});
