import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardAcquisitionResponseSchema, type CardAcquisitionResponse } from "./card-acquisition-response.js";
import { cardReaderApduResponseSchema, type CardReaderApduResponse } from "./card-reader-apdu-response.js";
import { loyaltyResponseSchema, type LoyaltyResponse } from "./loyalty-response.js";
import { paymentResponse4Schema, type PaymentResponse4 } from "./payment-response4.js";
import { reversalResponseSchema, type ReversalResponse } from "./reversal-response.js";
import { storedValueResponseSchema, type StoredValueResponse } from "./stored-value-response.js";

export type RepeatedResponseMessageBody = {
  /**
   * It conveys Information related to the Loyalty transaction processed by the POI System. Content
   * of the Loyalty Response message.
   */
  loyaltyResponse?: LoyaltyResponse;
  /**
   * It conveys Information related to the Payment transaction processed by the POI System. Content
   * of the Payment Response message.
   */
  paymentResponse?: PaymentResponse4;
  /**
   * It conveys Information related to the reversal processed by the POI System. Content of the
   * Reversal Response message.
   */
  reversalResponse?: ReversalResponse;
  /**
   * It conveys Information related to the Stored Value transaction processed by the POI System.
   * Content of the Stored Value Response message.
   */
  storedValueResponse?: StoredValueResponse;
  /**
   * It conveys Information related to the payment and loyalty cards read and processed by the POI
   * System and entered by the Customer. Content of the Card Acquisition Response message.
   */
  cardAcquisitionResponse?: CardAcquisitionResponse;
  /**
   * Content of the Card Reader APDU Response message. It contains the result of the requested
   * service, APDU response sent by the chip of the card in response to the APDU request.
   */
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
