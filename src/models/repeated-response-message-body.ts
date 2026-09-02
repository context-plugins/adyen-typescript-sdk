import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardAcquisitionResponseSchema, type CardAcquisitionResponse } from "./card-acquisition-response.js";
import { cardReaderApduResponseSchema, type CardReaderApduResponse } from "./card-reader-apdu-response.js";
import { loyaltyResponseSchema, type LoyaltyResponse } from "./loyalty-response.js";
import { paymentResponse4Schema, type PaymentResponse4 } from "./payment-response4.js";
import { reversalResponseSchema, type ReversalResponse } from "./reversal-response.js";
import { storedValueResponseSchema, type StoredValueResponse } from "./stored-value-response.js";

export type RepeatedResponseMessageBody = {
  loyaltyResponse?: LoyaltyResponse;
  paymentResponse?: PaymentResponse4;
  reversalResponse?: ReversalResponse;
  storedValueResponse?: StoredValueResponse;
  cardAcquisitionResponse?: CardAcquisitionResponse;
  cardReaderApduResponse?: CardReaderApduResponse;
};

export const repeatedResponseMessageBodySchema: Schema<RepeatedResponseMessageBody> =
  s.object<RepeatedResponseMessageBody>({
    loyaltyResponse: s.optional(s.lazy(() => loyaltyResponseSchema)),
    paymentResponse: s.optional(s.lazy(() => paymentResponse4Schema)),
    reversalResponse: s.optional(s.lazy(() => reversalResponseSchema)),
    storedValueResponse: s.optional(s.lazy(() => storedValueResponseSchema)),
    cardAcquisitionResponse: s.optional(s.lazy(() => cardAcquisitionResponseSchema)),
    cardReaderApduResponse: s.optional(s.lazy(() => cardReaderApduResponseSchema)),
    _keysMap: {
      loyaltyResponse: "LoyaltyResponse",
      paymentResponse: "PaymentResponse",
      reversalResponse: "ReversalResponse",
      storedValueResponse: "StoredValueResponse",
      cardAcquisitionResponse: "CardAcquisitionResponse",
      cardReaderApduResponse: "CardReaderAPDUResponse",
    },
  });
