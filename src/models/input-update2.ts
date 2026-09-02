import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { menuEntrySchema, type MenuEntry } from "./menu-entry.js";
import { messageReferenceSchema, type MessageReference } from "./message-reference.js";
import { outputContentSchema, type OutputContent } from "./output-content.js";

export type InputUpdate2 = {
  messageReference: MessageReference;
  outputContent: OutputContent;
  menuEntry?: MenuEntry[];
  outputSignature?: string;
  minLength?: number;
  maxLength?: number;
  maxDecimalLength?: number;
};

export const inputUpdate2Schema: Schema<InputUpdate2> = s.object<InputUpdate2>({
  messageReference: messageReferenceSchema,
  outputContent: outputContentSchema,
  menuEntry: s.optional(s.array(s.lazy(() => menuEntrySchema))),
  outputSignature: s.optional(s.string()),
  minLength: s.optional(s.number()),
  maxLength: s.optional(s.number()),
  maxDecimalLength: s.optional(s.number()),
  _keysMap: {
    messageReference: "MessageReference",
    outputContent: "OutputContent",
    menuEntry: "MenuEntry",
    outputSignature: "OutputSignature",
    minLength: "MinLength",
    maxLength: "MaxLength",
    maxDecimalLength: "MaxDecimalLength",
  },
});
