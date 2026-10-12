import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageHeaderSchema, type MessageHeader } from "./message-header.js";
import {
  repeatedResponseMessageBodySchema,
  type RepeatedResponseMessageBody,
} from "./repeated-response-message-body.js";

/** Content of the requested Message Response. If Result is Success (process completed). */
export type RepeatedMessageResponse2 = {
  /**
   * Message header of the Sale to POI protocol message. It conveys Information related to the Sale
   * to POI protocol management.
   */
  messageHeader: MessageHeader;
  repeatedResponseMessageBody: RepeatedResponseMessageBody;
};

export const repeatedMessageResponse2Schema: Schema<RepeatedMessageResponse2> =
  s.object<RepeatedMessageResponse2>({
    messageHeader: messageHeaderSchema,
    repeatedResponseMessageBody: repeatedResponseMessageBodySchema,
    _keysMap: {
      messageHeader: "MessageHeader",
      repeatedResponseMessageBody: "RepeatedResponseMessageBody",
    },
  });
