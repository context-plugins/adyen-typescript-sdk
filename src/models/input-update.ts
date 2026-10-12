import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { menuEntrySchema, type MenuEntry } from "./menu-entry.js";
import { messageReferenceSchema, type MessageReference } from "./message-reference.js";
import { outputContentSchema, type OutputContent } from "./output-content.js";

/**
 * Definition: Content of the Input Update message. : It conveys update of the display of an Input
 * request in progress.
 */
export type InputUpdate = {
  /**
   * Identification of a previous POI transaction. To abort a transaction in progress or to request
   * the status of a transaction from which no response has been received. It identifies the message
   * header of the message request to abort or request the status.
   */
  messageReference: MessageReference;
  /** Content to display or print. This is a sequence of elements if they have different formats. */
  outputContent: OutputContent;
  menuEntry?: MenuEntry[];
  outputSignature?: string;
  minLength?: number;
  maxLength?: number;
  maxDecimalLength?: number;
};

export const inputUpdateSchema: Schema<InputUpdate> = s.object<InputUpdate>({
  messageReference: messageReferenceSchema,
  outputContent: outputContentSchema,
  menuEntry: s.optional(s.array(s.lazy(() => menuEntrySchema))),
  outputSignature: s.optional(s.string()),
  minLength: s.optional(s.int()),
  maxLength: s.optional(s.int()),
  maxDecimalLength: s.optional(s.int()),
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
