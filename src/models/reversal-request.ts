import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { originalPoiTransaction2Schema, type OriginalPoiTransaction2 } from "./original-poi-transaction2.js";
import { reversalReason1Schema, type ReversalReason1 } from "./reversal-reason1.js";
import { saleDataSchema, type SaleData } from "./sale-data.js";

export type ReversalRequest = {
  saleData?: SaleData;
  originalPoiTransaction: OriginalPoiTransaction2;
  reversedAmount?: number;
  reversalReason: ReversalReason1;
};

export const reversalRequestSchema: Schema<ReversalRequest> = s.object<ReversalRequest>({
  saleData: s.optional(s.lazy(() => saleDataSchema)),
  originalPoiTransaction: originalPoiTransaction2Schema,
  reversedAmount: s.optional(s.number()),
  reversalReason: reversalReason1Schema,
  _keysMap: {
    saleData: "SaleData",
    originalPoiTransaction: "OriginalPOITransaction",
    reversedAmount: "ReversedAmount",
    reversalReason: "ReversalReason",
  },
});
