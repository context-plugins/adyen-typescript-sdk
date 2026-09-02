import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageReference3Schema, type MessageReference3 } from "./message-reference3.js";
import {
  repeatedMessageResponse2Schema,
  type RepeatedMessageResponse2,
} from "./repeated-message-response2.js";
import { response11Schema, type Response11 } from "./response11.js";

export type TransactionStatusResponse2 = {
  response: Response11;
  messageReference?: MessageReference3;
  repeatedMessageResponse?: RepeatedMessageResponse2;
};

export const transactionStatusResponse2Schema: Schema<TransactionStatusResponse2> =
  s.object<TransactionStatusResponse2>({
    response: response11Schema,
    messageReference: s.optional(s.lazy(() => messageReference3Schema)),
    repeatedMessageResponse: s.optional(s.lazy(() => repeatedMessageResponse2Schema)),
    _keysMap: {
      response: "Response",
      messageReference: "MessageReference",
      repeatedMessageResponse: "RepeatedMessageResponse",
    },
  });
