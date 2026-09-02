import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { alignment1Schema, type Alignment1 } from "./alignment1.js";
import { characterHeight1Schema, type CharacterHeight1 } from "./character-height1.js";
import { characterStyle1Schema, type CharacterStyle1 } from "./character-style1.js";
import { characterWidth1Schema, type CharacterWidth1 } from "./character-width1.js";

export type OutputText = {
  text: string;
  characterSet?: number;
  startRow?: number;
  startColumn?: number;
  characterWidth?: CharacterWidth1;
  characterHeight?: CharacterHeight1;
  characterStyle?: CharacterStyle1;
  alignment?: Alignment1;
  endOfLineFlag?: boolean;
};

export const outputTextSchema: Schema<OutputText> = s.object<OutputText>({
  text: s.string(),
  characterSet: s.optional(s.number()),
  startRow: s.optional(s.number()),
  startColumn: s.optional(s.number()),
  characterWidth: s.optional(s.lazy(() => characterWidth1Schema)),
  characterHeight: s.optional(s.lazy(() => characterHeight1Schema)),
  characterStyle: s.optional(s.lazy(() => characterStyle1Schema)),
  alignment: s.optional(s.lazy(() => alignment1Schema)),
  endOfLineFlag: s.optional(s.boolean()),
  _keysMap: {
    text: "Text",
    characterSet: "CharacterSet",
    startRow: "StartRow",
    startColumn: "StartColumn",
    characterWidth: "CharacterWidth",
    characterHeight: "CharacterHeight",
    characterStyle: "CharacterStyle",
    alignment: "Alignment",
    endOfLineFlag: "EndOfLineFlag",
  },
});
