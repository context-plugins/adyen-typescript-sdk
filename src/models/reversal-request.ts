import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { originalPoiTransaction2Schema, type OriginalPoiTransaction2 } from "./original-poi-transaction2.js";
import { reversalReason1Schema, type ReversalReason1 } from "./reversal-reason1.js";
import { saleDataSchema, type SaleData } from "./sale-data.js";

/**
 * It conveys Information related to the reversal of a previous payment or a loyalty transaction.
 * Content of the Reversal Request message.
 */
export type ReversalRequest = {
  /**
   * Data associated with the Sale System, with a particular value during the processing of the
   * payment by the POI, including the cards acquisition.
   */
  saleData?: SaleData;
  /** Identification of a previous POI transaction. */
  originalPoiTransaction: OriginalPoiTransaction2;
  /**
   * Amount of the payment or loyalty to reverse. ReversedAmount is implicitly equal to the
   * AuthorizedAmount if absent.
   */
  reversedAmount?: number;
  /**
   * Reason of the payment or loyalty reversal. Possible values:
   * * **CustCancel**
   * * **Malfunction**
   * * **MerchantCancel**
   * * **Unable2Compl**
   */
  reversalReason: ReversalReason1;
};

export const reversalRequestSchema: Schema<ReversalRequest> = s.object<ReversalRequest>({
  saleData: s.optional(s.lazy(() => saleDataSchema)),
  originalPoiTransaction: originalPoiTransaction2Schema,
  reversedAmount: s.optional(s.float64()),
  reversalReason: reversalReason1Schema,
  _keysMap: {
    saleData: "SaleData",
    originalPoiTransaction: "OriginalPOITransaction",
    reversedAmount: "ReversedAmount",
    reversalReason: "ReversalReason",
  },
});
