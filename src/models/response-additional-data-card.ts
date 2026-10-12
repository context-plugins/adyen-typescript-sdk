import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseAdditionalDataCard = {
  /**
   * This is an ALT ID (alternate ID) mapped to the Card PAN.
   *
   * > Returned only in case of Ecommerce Card Payment in India
   */
  cardAltId?: string;
  /**
   * The first six digits of the card number.
   *
   * This is the [Bank Identification Number
   * (BIN)](https://docs.adyen.com/get-started-with-adyen/payment-glossary#bank-identification-number-bin)
   * for card numbers with a six-digit BIN.
   *
   * Example: 521234
   */
  cardBin?: string;
  /** The cardholder name passed in the payment request. */
  cardHolderName?: string;
  /**
   * The bank or the financial institution granting lines of credit through card association branded
   * payment cards. This information can be included when available.
   */
  cardIssuingBank?: string;
  /**
   * The country where the card was issued.
   *
   * Example: US
   */
  cardIssuingCountry?: string;
  /**
   * The currency in which the card is issued, if this information is available. Provided as the
   * currency code or currency number from the ISO-4217 standard.
   *
   * Example: USD
   */
  cardIssuingCurrency?: string;
  /**
   * The card payment method used for the transaction.
   *
   * Example: amex
   */
  cardPaymentMethod?: string;
  /**
   * The Card Product ID represents the type of card following card scheme product definitions and
   * can be returned for Adyen Acquiring service level payments.
   *
   * Example values Visa:
   * * **A** - Visa Traditional
   * * **B** - Visa Traditional Rewards
   * * **C** - Visa Signature
   * * **D** - Visa Signature Preferred
   * * **F** - Visa Classic
   *
   * Example values Mastercard:
   * * **MCC** - Mastercard Card
   * * **MCE** - Mastercard Electronic Card
   * * **MCF** - Mastercard Corporate Fleet Card
   * * **MCG** - Gold Mastercard Card
   * * **MCH** - Mastercard Premium Charge
   * * **MCI** - Mastercard Select Debit
   */
  cardProductId?: string;
  /**
   * The last four digits of a card number.
   *
   * > Returned only in case of a card payment.
   */
  cardSummary?: string;
  /**
   * The first eight digits of the card number. Only returned if the card number is 16 digits or
   * more.
   *
   * This is the [Bank Identification Number
   * (BIN)](https://docs.adyen.com/get-started-with-adyen/payment-glossary#bank-identification-number-bin)
   * for card numbers with an eight-digit BIN.
   *
   * Example: 52123423
   */
  issuerBin?: string;
};

export const responseAdditionalDataCardSchema: Schema<ResponseAdditionalDataCard> =
  s.object<ResponseAdditionalDataCard>({
    cardAltId: s.optional(s.string()),
    cardBin: s.optional(s.string()),
    cardHolderName: s.optional(s.string()),
    cardIssuingBank: s.optional(s.string()),
    cardIssuingCountry: s.optional(s.string()),
    cardIssuingCurrency: s.optional(s.string()),
    cardPaymentMethod: s.optional(s.string()),
    cardProductId: s.optional(s.string()),
    cardSummary: s.optional(s.string()),
    issuerBin: s.optional(s.string()),
    _keysMap: {
      cardAltId: "cardAltID",
    },
  });
