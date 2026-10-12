import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageReference3Schema, type MessageReference3 } from "./message-reference3.js";
import {
  repeatedMessageResponse2Schema,
  type RepeatedMessageResponse2,
} from "./repeated-message-response2.js";
import { response11Schema, type Response11 } from "./response11.js";

/**
 * Content of the TransactionStatus Response message. It conveys Information related to the status
 * of the last or current Payment, Loyalty or Reversal transaction.
 */
export type TransactionStatusResponse = {
  /** Result of a message request processing. */
  response: Response11;
  /** Identification of a previous POI transaction. If `Response.Result` is Success. */
  messageReference?: MessageReference3;
  /** Content of the requested Message Response. If Result is Success (process completed). */
  repeatedMessageResponse?: RepeatedMessageResponse2;
};

export const transactionStatusResponseSchema: Schema<TransactionStatusResponse> =
  s.object<TransactionStatusResponse>({
    response: response11Schema,
    messageReference: s.optional(s.lazy(() => messageReference3Schema)),
    repeatedMessageResponse: s.optional(s.lazy(() => repeatedMessageResponse2Schema)),
    _keysMap: {
      response: "Response",
      messageReference: "MessageReference",
      repeatedMessageResponse: "RepeatedMessageResponse",
    },
  });
