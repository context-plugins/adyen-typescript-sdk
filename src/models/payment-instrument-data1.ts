import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardData1Schema, type CardData1 } from "./card-data1.js";
import { checkData1Schema, type CheckData1 } from "./check-data1.js";
import { mobileData1Schema, type MobileData1 } from "./mobile-data1.js";
import { paymentInstrumentType11Schema, type PaymentInstrumentType11 } from "./payment-instrument-type11.js";
import { storedValueAccountIdSchema, type StoredValueAccountId } from "./stored-value-account-id.js";

/**
 * Data related to the instrument of payment for the transaction. If this type of payment card is
 * configured to send information if the CardAcquisition response.
 */
export type PaymentInstrumentData1 = {
  /**
   * Type of payment instrument. Possible values:
   * * **Card**
   * * **Cash**
   * * **Check**
   * * **Mobile**
   * * **StoredValue**
   */
  paymentInstrumentType: PaymentInstrumentType11;
  /**
   * Sensitive information related to the payment card, protected by CMS. SensitiveCardData
   * protected by CMS EnvelopedData.
   */
  protectedCardData?: string;
  /**
   * Information related to the payment card used for the transaction. If PaymentInstrumentType is
   * Card.
   */
  cardData?: CardData1;
  /**
   * Information related to the paper check used for the transaction. If PaymentInstrumentType is
   * Check.
   */
  checkData?: CheckData1;
  /**
   * Information related to the mobile for the payment transaction. If PaymentInstrumentType is
   * Mobile.
   */
  mobileData?: MobileData1;
  /**
   * Identification of the stored value account or the stored value card and the associated product
   * sold by the Sale System for stored value requests.
   */
  storedValueAccountId?: StoredValueAccountId;
};

export const paymentInstrumentData1Schema: Schema<PaymentInstrumentData1> = s.object<PaymentInstrumentData1>({
  paymentInstrumentType: paymentInstrumentType11Schema,
  protectedCardData: s.optional(s.string()),
  cardData: s.optional(s.lazy(() => cardData1Schema)),
  checkData: s.optional(s.lazy(() => checkData1Schema)),
  mobileData: s.optional(s.lazy(() => mobileData1Schema)),
  storedValueAccountId: s.optional(s.lazy(() => storedValueAccountIdSchema)),
  _keysMap: {
    paymentInstrumentType: "PaymentInstrumentType",
    protectedCardData: "ProtectedCardData",
    cardData: "CardData",
    checkData: "CheckData",
    mobileData: "MobileData",
    storedValueAccountId: "StoredValueAccountID",
  },
});
