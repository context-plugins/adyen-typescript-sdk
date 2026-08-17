
# Output Text

Content of text message to display or print.
It conveys information related to the content of the text message and its format. All the data elements related to the format of the text to display or print are parameters valid for the whole text content.

## Structure

`OutputText`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string` | Required | Content of text message to display, print or play. |
| `characterSet` | `number \| undefined` | Optional | Character height of the text string to display or print. Absence of this data element means the characters have normal height. |
| `startRow` | `number \| undefined` | Optional | Row where the text string has to be displayed or printed.<br><br>**Constraints**: `>= 1`, `<= 500` |
| `startColumn` | `number \| undefined` | Optional | Column where the text string has to be displayed or printed.<br><br>**Constraints**: `>= 1`, `<= 500` |
| `characterWidth` | [`CharacterWidth1Enum \| undefined`](../../doc/models/character-width-1-enum.md) | Optional | Character width of the text string to display or print. Absence of this data element means the characters have normal width.<br>Possible values:<br><br>* **DoubleWidth**<br>* **SingleWidth** |
| `characterHeight` | [`CharacterHeight1Enum \| undefined`](../../doc/models/character-height-1-enum.md) | Optional | Character height of the text string to display or print. Absence of this data element means the characters have normal height.<br>Possible values:<br><br>* **DoubleHeight**<br>* **HalfHeight**<br>* **SingleHeight** |
| `characterStyle` | [`CharacterStyle1Enum \| undefined`](../../doc/models/character-style-1-enum.md) | Optional | Typographic style of the sequence of characters to display or print. Absence of this data element means the characters have normal style.<br>Possible values:<br><br>* **Bold**<br>* **Italic**<br>* **Normal**<br>* **Underline** |
| `alignment` | [`Alignment1Enum \| undefined`](../../doc/models/alignment-1-enum.md) | Optional | Alignment of the text string on the display line or print line. Absence of this data element means the characters have normal alignment.<br>Possible values:<br><br>* **Centred**<br>* **Justified**<br>* **Left**<br>* **Right** |
| `endOfLineFlag` | `boolean \| undefined` | Optional | Indicates if the text is at the end of a line. Allows the display or the print of a new line and a carry-over return characters after the formatted text.<br><br>**Default**: `true` |

## Example

```ts
import { CharacterHeight1Enum, CharacterWidth1Enum, OutputText } from 'adyen';

const outputText: OutputText = {
  text: 'Text4',
  characterSet: 178,
  startRow: 90,
  startColumn: 204,
  characterWidth: CharacterWidth1Enum.SingleWidth,
  characterHeight: CharacterHeight1Enum.SingleHeight,
  endOfLineFlag: true,
};
```

