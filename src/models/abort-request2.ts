import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayOutput1Schema, type DisplayOutput1 } from "./display-output1.js";
import { messageReference4Schema, type MessageReference4 } from "./message-reference4.js";

export type AbortRequest2 = {
  messageReference: MessageReference4;
  abortReason: string;
  displayOutput?: DisplayOutput1;
};

export const abortRequest2Schema: Schema<AbortRequest2> = s.object<AbortRequest2>({
  messageReference: messageReference4Schema,
  abortReason: s.string(),
  displayOutput: s.optional(s.lazy(() => displayOutput1Schema)),
  _keysMap: {
    messageReference: "MessageReference",
    abortReason: "AbortReason",
    displayOutput: "DisplayOutput",
  },
});
