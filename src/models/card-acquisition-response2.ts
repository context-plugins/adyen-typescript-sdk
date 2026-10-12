import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountSchema, type LoyaltyAccount } from "./loyalty-account.js";
import { paymentInstrumentData1Schema, type PaymentInstrumentData1 } from "./payment-instrument-data1.js";
import { poiData1Schema, type PoiData1 } from "./poi-data1.js";
import { response11Schema, type Response11 } from "./response11.js";
import { saleData1Schema, type SaleData1 } from "./sale-data1.js";

/** Content of the Card Acquisition Response message. */
export type CardAcquisitionResponse2 = {
  /** Result of a message request processing. */
  response: Response11;
  /** Data related to the Sale System. */
  saleData: SaleData1;
  /** Data related to the POI System. */
  poiData: PoiData1;
  /**
   * Type of payment card. Brands available for payment by the card and not chosen by the Customer.
   */
  paymentBrand?: string[];
  /**
   * Data related to the instrument of payment for the transaction. If this type of payment card is
   * configured to send information if the CardAcquisition response.
   */
  paymentInstrumentData?: PaymentInstrumentData1;
  /** Data related to the loyalty System. */
  loyaltyAccount?: LoyaltyAccount[];
};

export const cardAcquisitionResponse2Schema: Schema<CardAcquisitionResponse2> =
  s.object<CardAcquisitionResponse2>({
    response: response11Schema,
    saleData: saleData1Schema,
    poiData: poiData1Schema,
    paymentBrand: s.optional(s.array(s.string())),
    paymentInstrumentData: s.optional(s.lazy(() => paymentInstrumentData1Schema)),
    loyaltyAccount: s.optional(s.array(s.lazy(() => loyaltyAccountSchema))),
    _keysMap: {
      response: "Response",
      saleData: "SaleData",
      poiData: "POIData",
      paymentBrand: "PaymentBrand",
      paymentInstrumentData: "PaymentInstrumentData",
      loyaltyAccount: "LoyaltyAccount",
    },
  });
