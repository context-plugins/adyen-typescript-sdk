import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceLevel1Schema, type ServiceLevel1 } from "./service-level1.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type DinersInfo = {
  /**
   * MID (Merchant ID) number. Required for merchants operating in Japan. Format: 14 numeric
   * characters.
   */
  midNumber?: string;
  /**
   * Indicates whether the JCB Merchant ID is reused from a previously configured JCB payment
   * method. The default value is **false**. For merchants operating in Japan, this field is
   * required and must be set to **true**.
   *
   * @default false
   */
  reuseMidNumber?: boolean;
  /**
   * Specifies the service level (settlement type) of this payment method. Required for merchants
   * operating in Japan. Possible values:
   *  * **noContract**: Adyen holds the contract with JCB.
   *  * **gatewayContract**: JCB receives the settlement and handles disputes, then pays out to you
   *    or your sub-merchant directly.
   */
  serviceLevel?: ServiceLevel1;
  /**
   * Information regarding the transaction description. > You cannot configure the transaction
   * description in the test environment.
   */
  transactionDescription?: TransactionDescriptionInfo1;
};

export const dinersInfoSchema: Schema<DinersInfo> = s.object<DinersInfo>({
  midNumber: s.optional(s.string()),
  reuseMidNumber: s.defaulted(s.boolean(), false),
  serviceLevel: s.optional(s.lazy(() => serviceLevel1Schema)),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
