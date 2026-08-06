
# Output Text

Content of text message to display or print.
It conveys information related to the content of the text message and its format. All the data elements related to the format of the text to display or print are parameters valid for the whole text content.

*This model accepts additional fields of type unknown.*

## Structure

`OutputText`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string` | Required | Content of text message to display, print or play. |
| `characterSet` | `number \| undefined` | Optional | Character height of the text string to display or print. Absence of this data element means the characters have normal height. |
| `startRow` | `number \| undefined` | Optional | Row where the text string has to be displayed or printed.<br><br>**Constraints**: `>= 1`, `<= 500` |
| `startColumn` | `number \| undefined` | Optional | Column where the text string has to be displayed or printed.<br><br>**Constraints**: `>= 1`, `<= 500` |
| `characterWidth` | [`CharacterWidth1 \| undefined`](../../doc/models/character-width-1.md) | Optional | - |
| `characterHeight` | [`CharacterHeight1 \| undefined`](../../doc/models/character-height-1.md) | Optional | - |
| `characterStyle` | [`CharacterStyle1 \| undefined`](../../doc/models/character-style-1.md) | Optional | - |
| `alignment` | [`Alignment1 \| undefined`](../../doc/models/alignment-1.md) | Optional | - |
| `endOfLineFlag` | `boolean \| undefined` | Optional | Indicates if the text is at the end of a line. Allows the display or the print of a new line and a carry-over return characters after the formatted text.<br><br>**Default**: `true` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CharacterHeight1, CharacterWidth1, OutputText } from 'adyen';

const outputText: OutputText = {
  text: 'Text4',
  characterSet: 178,
  startRow: 90,
  startColumn: 204,
  characterWidth: CharacterWidth1.SingleWidth,
  characterHeight: CharacterHeight1.SingleHeight,
  endOfLineFlag: true,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

