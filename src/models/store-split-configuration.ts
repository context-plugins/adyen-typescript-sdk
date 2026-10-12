import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StoreSplitConfiguration = {
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

export const storeSplitConfigurationSchema: Schema<StoreSplitConfiguration> =
  s.object<StoreSplitConfiguration>({
    balanceAccountId: s.optional(s.string()),
    splitConfigurationId: s.optional(s.string()),
  });
