import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { soundFormat1Schema, type SoundFormat1 } from "./sound-format1.js";

export type SoundContent = {
  /**
   * Possible values:
   * * **MessageRef**
   * * **SoundRef**
   * * **Text**
   */
  soundFormat: SoundFormat1;
  language?: string;
  referenceId?: string;
  text?: string;
};

export const soundContentSchema: Schema<SoundContent> = s.object<SoundContent>({
  soundFormat: soundFormat1Schema,
  language: s.optional(s.string()),
  referenceId: s.optional(s.string()),
  text: s.optional(s.string()),
  _keysMap: {
    soundFormat: "SoundFormat",
    language: "Language",
    referenceId: "ReferenceID",
    text: "Text",
  },
});
