import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountModel1Schema, type BankAccountModel1 } from "./bank-account-model1.js";
import { cardInfo1Schema, type CardInfo1 } from "./card-info1.js";
import { statusReasonSchema, type StatusReason } from "./status-reason.js";
import { status10Schema, type Status10 } from "./status10.js";
import { type111Schema, type Type111 } from "./type111.js";

export type PaymentInstrumentInfo = {
  /**
   * The unique identifier of the [balance
   * account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id)
   * associated with the payment instrument.
   */
  balanceAccountId: string;
  /** Contains the business account details. */
  bankAccount?: BankAccountModel1;
  /**
   * Contains information about the card. Required when you create a payment instrument of `type`
   * **card**.
   */
  card?: CardInfo1;
  /** Your description for the payment instrument, maximum 300 characters. */
  description?: string;
  /**
   * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * country code where the payment instrument is issued. For example, **NL** or **US**.
   */
  issuingCountryCode: string;
  /**
   * The unique identifier of the [payment instrument
   * group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id)
   * to which the payment instrument belongs.
   */
  paymentInstrumentGroupId?: string;
  /** Your reference for the payment instrument, maximum 150 characters. */
  reference?: string;
  /**
   * The status of the payment instrument. If a status is not specified when creating a payment
   * instrument, it is set to **active** by default. However, there can be exceptions for cards
   * based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical
   * cards in the US, the default status is **inactive**.
   *
   * Possible values:
   *
   *  * **active**: The payment instrument is active and can be used to make payments.
   *
   *  * **inactive**: The payment instrument is inactive and cannot be used to make payments.
   *
   *  * **suspended**: The payment instrument is suspended, either because it was stolen or lost.
   *
   *  * **closed**: The payment instrument is permanently closed. This action cannot be undone.
   */
  status?: Status10;
  /**
   * The status comment provides additional information for the statusReason of the payment
   * instrument.
   */
  statusComment?: string;
  /**
   * The reason for the status of the payment instrument.
   *
   * Possible values: **accountClosure**, **damaged**, **endOfLife**, **expired**, **lost**,
   * **stolen**, **suspectedFraud**, **transactionRule**, **other**. If the reason is **other**, you
   * must also send the `statusComment` parameter describing the status change.
   */
  statusReason?: StatusReason;
  /**
   * The type of payment instrument.
   *
   * Possible values: **card**, **bankAccount**.
   */
  type: Type111;
};

export const paymentInstrumentInfoSchema: Schema<PaymentInstrumentInfo> = s.object<PaymentInstrumentInfo>({
  balanceAccountId: s.string(),
  bankAccount: s.optional(s.lazy(() => bankAccountModel1Schema)),
  card: s.optional(s.lazy(() => cardInfo1Schema)),
  description: s.optional(s.string()),
  issuingCountryCode: s.string(),
  paymentInstrumentGroupId: s.optional(s.string()),
  reference: s.optional(s.string()),
  status: s.optional(s.lazy(() => status10Schema)),
  statusComment: s.optional(s.string()),
  statusReason: s.optional(s.lazy(() => statusReasonSchema)),
  type: type111Schema,
});
