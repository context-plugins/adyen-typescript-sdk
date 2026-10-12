import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Rules for Adyen for Platforms merchants to split the transaction amount and fees. */
export type StoreSplitConfiguration1 = {
  /**
   * The [unique identifier of the balance
   * account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id)
   * to which the split amount must be booked, depending on the defined [split
   * logic](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/splitConfigurations#request-rules-splitLogic).
   */
  balanceAccountId?: string;
  /**
   * The unique identifier of the [split configuration
   * profile](https://docs.adyen.com/platforms/automatic-split-configuration/create-split-configuration/).
   */
  splitConfigurationId?: string;
};

export const storeSplitConfiguration1Schema: Schema<StoreSplitConfiguration1> =
  s.object<StoreSplitConfiguration1>({
    balanceAccountId: s.optional(s.string()),
    splitConfigurationId: s.optional(s.string()),
  });
