import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { alignment1Schema, type Alignment1 } from "./alignment1.js";
import { characterHeight1Schema, type CharacterHeight1 } from "./character-height1.js";
import { characterStyle1Schema, type CharacterStyle1 } from "./character-style1.js";
import { characterWidth1Schema, type CharacterWidth1 } from "./character-width1.js";

/**
 * Content of text message to display or print. It conveys information related to the content of the
 * text message and its format. All the data elements related to the format of the text to display
 * or print are parameters valid for the whole text content.
 */
export type OutputText = {
  /** Content of text message to display, print or play. */
  text: string;
  /**
   * Character height of the text string to display or print. Absence of this data element means the
   * characters have normal height.
   */
  characterSet?: number;
  /** Row where the text string has to be displayed or printed. */
  startRow?: number;
  /** Column where the text string has to be displayed or printed. */
  startColumn?: number;
  /**
   * Character width of the text string to display or print. Absence of this data element means the
   * characters have normal width. Possible values:
   * * **DoubleWidth**
   * * **SingleWidth**
   */
  characterWidth?: CharacterWidth1;
  /**
   * Character height of the text string to display or print. Absence of this data element means the
   * characters have normal height. Possible values:
   * * **DoubleHeight**
   * * **HalfHeight**
   * * **SingleHeight**
   */
  characterHeight?: CharacterHeight1;
  /**
   * Typographic style of the sequence of characters to display or print. Absence of this data
   * element means the characters have normal style. Possible values:
   * * **Bold**
   * * **Italic**
   * * **Normal**
   * * **Underline**
   */
  characterStyle?: CharacterStyle1;
  /**
   * Alignment of the text string on the display line or print line. Absence of this data element
   * means the characters have normal alignment. Possible values:
   * * **Centred**
   * * **Justified**
   * * **Left**
   * * **Right**
   */
  alignment?: Alignment1;
  /**
   * Indicates if the text is at the end of a line. Allows the display or the print of a new line
   * and a carry-over return characters after the formatted text.
   *
   * @default true
   */
  endOfLineFlag?: boolean;
};

export const outputTextSchema: Schema<OutputText> = s.object<OutputText>({
  text: s.string(),
  characterSet: s.optional(s.int()),
  startRow: s.optional(s.int()),
  startColumn: s.optional(s.int()),
  characterWidth: s.optional(s.lazy(() => characterWidth1Schema)),
  characterHeight: s.optional(s.lazy(() => characterHeight1Schema)),
  characterStyle: s.optional(s.lazy(() => characterStyle1Schema)),
  alignment: s.optional(s.lazy(() => alignment1Schema)),
  endOfLineFlag: s.defaulted(s.boolean(), true),
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
