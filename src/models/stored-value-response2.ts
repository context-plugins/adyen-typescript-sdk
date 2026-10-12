import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentReceiptSchema, type PaymentReceipt } from "./payment-receipt.js";
import { poiData1Schema, type PoiData1 } from "./poi-data1.js";
import { response11Schema, type Response11 } from "./response11.js";
import { saleData1Schema, type SaleData1 } from "./sale-data1.js";
import { storedValueResultSchema, type StoredValueResult } from "./stored-value-result.js";

/** Content of the Stored Value Response message. */
export type StoredValueResponse2 = {
  /** Result of a message request processing. */
  response: Response11;
  /** Data related to the Sale System. */
  saleData: SaleData1;
  /** Data related to the POI System. */
  poiData: PoiData1;
  /**
   * Result of loading/reloading a stored value card. If StoredValueResponse.Result is Success or
   * Partial, one entry per StoredValueRequest.StoredValueData loaded or activated.
   */
  storedValueResult?: StoredValueResult[];
  paymentReceipt?: PaymentReceipt[];
};

export const storedValueResponse2Schema: Schema<StoredValueResponse2> = s.object<StoredValueResponse2>({
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
