import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contractSchema, type Contract } from "./contract.js";
import { tokenServiceSchema, type TokenService } from "./token-service.js";

/**
 * The recurring settings for the payment. Use this property when you want to enable [recurring
 * payments](https://docs.adyen.com/classic-integration/recurring-payments)., A container for the
 * type of a recurring contract to be retrieved.
 *
 * The contract value needs to match the contract value submitted in the payment transaction used to
 * create a recurring contract. However, if `ONECLICK,RECURRING` is the original contract definition
 * in the initial payment, then `contract` should take either `ONECLICK` or `RECURRING`, depending
 * on whether or not you want the shopper to enter their card's security code when they finalize
 * their purchase., A container for the type of recurring contract to be retrieved.
 *
 * The recurring.contract must be set to `PAYOUT`, A container for the type of recurring contract to
 * be retrieved.
 *
 * The `recurring.contract` must be set to "PAYOUT"., The recurring settings for the payment. Use
 * this property when you want to enable [recurring
 * payments](https://docs.adyen.com/classic-integration/recurring-payments)., The recurring settings
 * for the payment. Use this property when you want to enable [recurring
 * payments](https://docs.adyen.com/online-payments/tokenization).
 */
export type Recurring = {
  /**
   * The type of recurring contract to be used. Possible values:
   * * `ONECLICK` – Payment details can be used to initiate a one-click payment, where the shopper
   *   enters the [card security code
   *   (CVC/CVV)](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid).
   * * `RECURRING` – Payment details can be used without the card security code to initiate
   *   [card-not-present
   *   transactions](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-not-present-cnp).
   * * `ONECLICK,RECURRING` – Payment details can be used regardless of whether the shopper is on
   *   your site or not.
   * * `PAYOUT` – Payment details can be used to [make a
   *   payout](https://docs.adyen.com/online-payments/online-payouts).
   * * `EXTERNAL` - Use this when you store payment details and send the raw card number or network
   *   token directly in your API request.
   */
  contract?: Contract;
  /** A descriptive name for this detail. */
  recurringDetailName?: string;
  /** Date after which no further authorisations shall be performed. Only for 3D Secure 2. */
  recurringExpiry?: Date;
  /** Minimum number of days between authorisations. Only for 3D Secure 2. */
  recurringFrequency?: string;
  /** The name of the token service. */
  tokenService?: TokenService;
};

export const recurringSchema: Schema<Recurring> = s.object<Recurring>({
  contract: s.optional(s.lazy(() => contractSchema)),
  recurringDetailName: s.optional(s.string()),
  recurringExpiry: s.optional(s.dateTime()),
  recurringFrequency: s.optional(s.string()),
  tokenService: s.optional(s.lazy(() => tokenServiceSchema)),
});
