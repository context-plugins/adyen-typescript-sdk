import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentReceiptSchema, type PaymentReceipt } from "./payment-receipt.js";
import { poiData1Schema, type PoiData1 } from "./poi-data1.js";
import { response11Schema, type Response11 } from "./response11.js";
import { saleData1Schema, type SaleData1 } from "./sale-data1.js";
import { storedValueResultSchema, type StoredValueResult } from "./stored-value-result.js";

export type StoredValueResponse = {
  response: Response11;
  saleData: SaleData1;
  poiData: PoiData1;
  storedValueResult?: StoredValueResult[];
  paymentReceipt?: PaymentReceipt[];
};

export const storedValueResponseSchema: Schema<StoredValueResponse> = s.object<StoredValueResponse>({
  response: response11Schema,
  saleData: saleData1Schema,
  poiData: poiData1Schema,
  storedValueResult: s.optional(s.array(s.lazy(() => storedValueResultSchema))),
  paymentReceipt: s.optional(s.array(s.lazy(() => paymentReceiptSchema))),
  _keysMap: {
    response: "Response",
    saleData: "SaleData",
    poiData: "POIData",
    storedValueResult: "StoredValueResult",
    paymentReceipt: "PaymentReceipt",
  },
});
