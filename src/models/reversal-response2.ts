import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { originalPoiTransactionSchema, type OriginalPoiTransaction } from "./original-poi-transaction.js";
import { paymentReceiptSchema, type PaymentReceipt } from "./payment-receipt.js";
import { poiData4Schema, type PoiData4 } from "./poi-data4.js";
import { response11Schema, type Response11 } from "./response11.js";

export type ReversalResponse2 = {
  response: Response11;
  poiData?: PoiData4;
  originalPoiTransaction?: OriginalPoiTransaction;
  reversedAmount?: number;
  paymentReceipt?: PaymentReceipt[];
};

export const reversalResponse2Schema: Schema<ReversalResponse2> = s.object<ReversalResponse2>({
  response: response11Schema,
  poiData: s.optional(s.lazy(() => poiData4Schema)),
  originalPoiTransaction: s.optional(s.lazy(() => originalPoiTransactionSchema)),
  reversedAmount: s.optional(s.number()),
  paymentReceipt: s.optional(s.array(s.lazy(() => paymentReceiptSchema))),
  _keysMap: {
    response: "Response",
    poiData: "POIData",
    originalPoiTransaction: "OriginalPOITransaction",
    reversedAmount: "ReversedAmount",
    paymentReceipt: "PaymentReceipt",
  },
});
