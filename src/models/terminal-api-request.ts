import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { saleToPoiRequestSchema, type SaleToPoiRequest } from "./sale-to-poi-request.js";

export type TerminalApiRequest = {
  saleToPoiRequest: SaleToPoiRequest;
};

export const terminalApiRequestSchema: Schema<TerminalApiRequest> = s.object<TerminalApiRequest>({
  saleToPoiRequest: saleToPoiRequestSchema,
  _keysMap: {
    saleToPoiRequest: "SaleToPOIRequest",
  },
});
