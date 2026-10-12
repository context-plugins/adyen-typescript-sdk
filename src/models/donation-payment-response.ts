import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount26Schema, type Amount26 } from "./amount26.js";
import { paymentResponse9Schema, type PaymentResponse9 } from "./payment-response9.js";
import { status1Schema, type Status1 } from "./status1.js";

export type DonationPaymentResponse = {
  /** Authorised amount in the transaction. */
  amount?: Amount26;
  /**
   * The Adyen account name of your charity. We will provide you with this account name once your
   * chosen charity has been
   * [onboarded](https://docs.adyen.com/online-payments/donations#onboarding).
   */
  donationAccount?: string;
  /** Your unique resource identifier. */
  id?: string;
  /** The merchant account identifier, with which you want to process the transaction. */
  merchantAccount?: string;
  /** Action to be taken for completing the payment. */
  payment?: PaymentResponse9;
  /**
   * The reference to uniquely identify a payment. This reference is used in all communication with
   * you about the payment status. We recommend using a unique value per payment; however, it is not
   * a requirement. If you need to provide multiple references for a transaction, separate them with
   * hyphens ("-"). Maximum length: 80 characters.
   */
  reference?: string;
  /**
   * The status of the donation transaction.
   *
   * Possible values:
   * * **completed**
   * * **pending**
   * * **refused**
   */
  status?: Status1;
};

export const donationPaymentResponseSchema: Schema<DonationPaymentResponse> =
  s.object<DonationPaymentResponse>({
    amount: s.optional(s.lazy(() => amount26Schema)),
    donationAccount: s.optional(s.string()),
    id: s.optional(s.string()),
    merchantAccount: s.optional(s.string()),
    payment: s.optional(s.lazy(() => paymentResponse9Schema)),
    reference: s.optional(s.string()),
    status: s.optional(s.lazy(() => status1Schema)),
  });
