import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { saleToPoiRequestSchema, type SaleToPoiRequest } from "./sale-to-poi-request.js";

/** The request payload of the Adyen Terminal API. */
export type TerminalApiRequest = {
  /**
   * The SaleToPOIRequest message pair is a container for the request message content. It contains a
   * MessageHeader and a message body.
   */
  saleToPoiRequest: SaleToPoiRequest;
};

export const terminalApiRequestSchema: Schema<TerminalApiRequest> = s.object<TerminalApiRequest>({
  saleToPoiRequest: saleToPoiRequestSchema,
  _keysMap: {
    saleToPoiRequest: "SaleToPOIRequest",
  },
});
