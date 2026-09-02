import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { applePayDonationsSchema, type ApplePayDonations } from "../apple-pay-donations.js";
import { cardDonationsSchema, type CardDonations } from "../card-donations.js";
import { googlePayDonationsSchema, type GooglePayDonations } from "../google-pay-donations.js";
import { idealDonationsSchema, type IdealDonations } from "../ideal-donations.js";
import { payWithGoogleDonationsSchema, type PayWithGoogleDonations } from "../pay-with-google-donations.js";
import { storedPaymentMethod1Schema, type StoredPaymentMethod1 } from "../stored-payment-method1.js";

export type PaymentMethod1 =
  | (ApplePayDonations & { type: "applepay" })
  | (PayWithGoogleDonations & { type: "paywithgoogle" })
  | (GooglePayDonations & { type: "googlepay" })
  | (CardDonations & { type: "scheme" })
  | (CardDonations & { type: "networkToken" })
  | (IdealDonations & { type: "ideal" })
  | (StoredPaymentMethod1 & { type: "sepadirectdebit" })
  | (CardDonations & { type: "card" });

export const paymentMethod1Schema: Schema<PaymentMethod1> = s.discriminatedUnion<PaymentMethod1>("type", {
  applepay: applePayDonationsSchema,
  paywithgoogle: payWithGoogleDonationsSchema,
  googlepay: googlePayDonationsSchema,
  scheme: cardDonationsSchema,
  networkToken: cardDonationsSchema,
  ideal: idealDonationsSchema,
  sepadirectdebit: storedPaymentMethod1Schema,
  card: cardDonationsSchema,
});
