import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details to provide if `type` is **cashapp**. */
export type CashAppUpdateInfo1 = {
  /** The URL of the logo image shown in Cash App checkout next to payments. */
  logoUrl?: string;
  /** The merchant display name shown in Cash App checkout. */
  merchantName?: string;
};

export const cashAppUpdateInfo1Schema: Schema<CashAppUpdateInfo1> = s.object<CashAppUpdateInfo1>({
  logoUrl: s.optional(s.string()),
  merchantName: s.optional(s.string()),
});
