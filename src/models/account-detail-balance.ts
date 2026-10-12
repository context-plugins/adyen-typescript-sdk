import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { detailBalance3Schema, type DetailBalance3 } from "./detail-balance3.js";

export type AccountDetailBalance = {
  /** The code of the account that holds the balance. */
  accountCode?: string;
  /** Details of the balance held by the account. */
  detailBalance?: DetailBalance3;
};

export const accountDetailBalanceSchema: Schema<AccountDetailBalance> = s.object<AccountDetailBalance>({
  accountCode: s.optional(s.string()),
  detailBalance: s.optional(s.lazy(() => detailBalance3Schema)),
});
