import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { saleToPoiResponseSchema, type SaleToPoiResponse } from "./sale-to-poi-response.js";

export type TerminalApiResponse = {
  saleToPoiResponse: SaleToPoiResponse;
};

export const terminalApiResponseSchema: Schema<TerminalApiResponse> = s.object<TerminalApiResponse>({
  saleToPoiResponse: saleToPoiResponseSchema,
  _keysMap: {
    saleToPoiResponse: "SaleToPOIResponse",
  },
});
