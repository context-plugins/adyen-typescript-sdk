import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardIdentification2Schema, type CardIdentification2 } from "./card-identification2.js";
import { sourceOfFundsSchema, type SourceOfFunds } from "./source-of-funds.js";

/** Details of the card or token used to fund the pay-in transaction. */
export type FundingInstrument2 = {
  /**
   * Card details used for the transfer, such as the Primary Account Number (PAN) or stored payment
   * method ID. Required if `sourceOfFunds` is **DEBIT**. Provide either:
   *  - `storedPaymentMethodId` or
   *  - `expiryMonth`, `expiryYear`, and `number`.
   */
  cardIdentification?: CardIdentification2;
  /** The unique reference assigned by the card network for the pay-in transaction. */
  networkPaymentReference?: string;
  /**
   * Your internal reference that identifies this funding instrument. Required if `sourceOfFunds` is
   * **DEPOSIT_ACCOUNT**.
   */
  reference?: string;
  /**
   * Indicates where the funds used for the transfer originated. Possible values are:
   * - **DEBIT** for card-to-card transfers.
   * - **DEPOSIT_ACCOUNT** for wallet-to-card transfers.
   */
  sourceOfFunds?: SourceOfFunds;
};

export const fundingInstrument2Schema: Schema<FundingInstrument2> = s.object<FundingInstrument2>({
  cardIdentification: s.optional(s.lazy(() => cardIdentification2Schema)),
  networkPaymentReference: s.optional(s.string()),
  reference: s.optional(s.string()),
  sourceOfFunds: s.optional(s.lazy(() => sourceOfFundsSchema)),
});
