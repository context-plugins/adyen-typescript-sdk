import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountSchema, type LoyaltyAccount } from "./loyalty-account.js";
import { paymentInstrumentData1Schema, type PaymentInstrumentData1 } from "./payment-instrument-data1.js";
import { poiData1Schema, type PoiData1 } from "./poi-data1.js";
import { response11Schema, type Response11 } from "./response11.js";
import { saleData1Schema, type SaleData1 } from "./sale-data1.js";

export type CardAcquisitionResponse = {
  response: Response11;
  saleData: SaleData1;
  poiData: PoiData1;
  paymentBrand?: string[];
  paymentInstrumentData?: PaymentInstrumentData1;
  loyaltyAccount?: LoyaltyAccount[];
};

export const cardAcquisitionResponseSchema: Schema<CardAcquisitionResponse> =
  s.object<CardAcquisitionResponse>({
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
