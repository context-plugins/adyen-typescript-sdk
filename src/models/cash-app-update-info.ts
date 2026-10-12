import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CashAppUpdateInfo = {
  /** The URL of the logo image shown in Cash App checkout next to payments. */
  logoUrl?: string;
  /** The merchant display name shown in Cash App checkout. */
  merchantName?: string;
};

export const cashAppUpdateInfoSchema: Schema<CashAppUpdateInfo> = s.object<CashAppUpdateInfo>({
  logoUrl: s.optional(s.string()),
  merchantName: s.optional(s.string()),
});
