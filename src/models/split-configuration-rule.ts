import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardRegionSchema, type CardRegion } from "./card-region.js";
import { fundingSource1Schema, type FundingSource1 } from "./funding-source1.js";
import { shopperInteraction11Schema, type ShopperInteraction11 } from "./shopper-interaction11.js";
import {
  splitConfigurationLogic2Schema,
  type SplitConfigurationLogic2,
} from "./split-configuration-logic2.js";

export type SplitConfigurationRule = {
  /**
   * The card region condition that determines whether the [split
   * logic](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic)
   * applies to the transaction.
   *
   * > This condition is in pilot phase, and not yet available for all platforms.
   *
   * Possible values:
   * * **domestic**: The card issuer and the store where the transaction is processed are registered
   *   in the same country.
   * * **international**: The card issuer and the store where the transaction is processed are
   *   registered in different countries or regions. Includes all **interRegional** and
   *   **intraRegional** transactions.
   * * **interRegional**: The card issuer and the store where the transaction is processed are
   *   registered in different regions.
   * * **intraRegional**: The card issuer and the store where the transaction is processed are
   *   registered in different countries, but in the same region.
   * * **intraEEA**: The card issuer and the store where the transaction is processed are registered
   *   in different countries, but in the European Economic Area (EEA).
   * * **ANY**: Applies to all transactions, regardless of the processing and issuing
   *   country/region.
   */
  cardRegion?: CardRegion;
  /**
   * The currency condition that defines whether the split logic applies. Its value must be a
   * three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217).
   */
  currency: string;
  /**
   * The funding source of the payment method.
   *
   * Possible values:
   * * **credit**
   * * **debit**
   * * **prepaid**
   * * **deferred_debit**
   * * **charged**
   * * **ANY**
   */
  fundingSource: FundingSource1;
  /**
   * The payment method condition that defines whether the split logic applies.
   *
   * Possible values:
   * * [Payment method variant](https://docs.adyen.com/development-resources/paymentmethodvariant):
   *   Apply the split logic for a specific payment method.
   * * **ANY**: Apply the split logic for all available payment methods.
   */
  paymentMethod: string;
  /** The unique identifier of the split configuration rule. */
  ruleId?: string;
  /**
   * The sales channel condition that defines whether the split logic applies.
   *
   * Possible values:
   * * **Ecommerce**: Online transactions where the cardholder is present.
   * * **ContAuth**: Card on file and/or subscription transactions, where the cardholder is known to
   *   the merchant (returning customer).
   * * **Moto**: Mail-order and telephone-order transactions where the customer is in contact with
   *   the merchant via email or telephone.
   * * **POS**: Point-of-sale transactions where the customer is physically present to make a
   *   payment using a secure payment terminal.
   * * **ANY**: All sales channels.
   */
  shopperInteraction: ShopperInteraction11;
  /** Contains the split logic that is applied if the rule conditions are met. */
  splitLogic: SplitConfigurationLogic2;
};

export const splitConfigurationRuleSchema: Schema<SplitConfigurationRule> = s.object<SplitConfigurationRule>({
  cardRegion: s.optional(s.lazy(() => cardRegionSchema)),
  currency: s.string(),
  fundingSource: fundingSource1Schema,
  paymentMethod: s.string(),
  ruleId: s.optional(s.string()),
  shopperInteraction: shopperInteraction11Schema,
  splitLogic: splitConfigurationLogic2Schema,
});
