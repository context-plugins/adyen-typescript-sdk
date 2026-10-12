import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceLevel2Schema, type ServiceLevel2 } from "./service-level2.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type JcbInfo = {
  /**
   * MID (Merchant ID) number. Required for merchants operating in Japan or merchants operating in
   * Canada, Australia and New Zealand when requesting `gatewayContract` or
   * `paymentDesignatorContract` service levels.Format: 14 numeric characters for Japan, 10 numeric
   * characters for Canada, Australia and New Zealand.
   */
  midNumber?: string;
  /**
   * Indicates whether the JCB Merchant ID is reused from a previously setup JCB payment method. The
   * default value is **false**.For merchants operating in Japan, this field is required and must be
   * set to **true**.
   *
   * @default false
   */
  reuseMidNumber?: boolean;
  /**
   * Specifies the service level (settlement type) of this payment method. Required for merchants
   * operating in Japan. Possible values:
   * * **noContract**: Adyen holds the contract with JCB for merchants operating in Japan or
   *   American Express for merchants operating in Canada, Australia and New Zealand.
   * * **gatewayContract**: JCB or American Express receives the settlement and handles disputes,
   *   then pays out to you or your sub-merchant directly.
   * * **paymentDesignatorContract**: Available only for merchants operating in Canada, Australia
   *   and New Zealand. Adyen receives the settlement, and handles disputes and payouts.
   */
  serviceLevel?: ServiceLevel2;
  /**
   * Information regarding the transaction description. > You cannot configure the transaction
   * description in the test environment.
   */
  transactionDescription?: TransactionDescriptionInfo1;
};

export const jcbInfoSchema: Schema<JcbInfo> = s.object<JcbInfo>({
  midNumber: s.optional(s.string()),
  reuseMidNumber: s.defaulted(s.boolean(), false),
  serviceLevel: s.optional(s.lazy(() => serviceLevel2Schema)),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
