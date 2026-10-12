import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { saleToPoiResponseSchema, type SaleToPoiResponse } from "./sale-to-poi-response.js";

/** The response payload of the Adyen Terminal API. */
export type TerminalApiResponse = {
  /**
   * The SaleToPOIResponse message pair is a container for the response message content. It contains
   * a MessageHeader and a message body.
   */
  saleToPoiResponse: SaleToPoiResponse;
};

export const terminalApiResponseSchema: Schema<TerminalApiResponse> = s.object<TerminalApiResponse>({
  saleToPoiResponse: saleToPoiResponseSchema,
  _keysMap: {
    saleToPoiResponse: "SaleToPOIResponse",
  },
});
