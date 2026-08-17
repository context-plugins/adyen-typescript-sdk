
# Output Content

Content to display or print.
This is a sequence of elements if they have different formats.

## Structure

`OutputContent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `outputFormat` | [`OutputFormat1Enum`](../../doc/models/output-format-1-enum.md) | Required | Format of the content to display or print.<br>Possible values:<br><br>* **BarCode**<br>* **MessageRef**<br>* **Text**<br>* **XHTML** |
| `predefinedContent` | [`PredefinedContent1 \| undefined`](../../doc/models/predefined-content-1.md) | Optional | Reference of a predefined message to display or print.<br>Mandatory, if `OutputFormat` is MessageRef, not allowed otherwise. |
| `outputText` | [`OutputText[] \| undefined`](../../doc/models/output-text.md) | Optional | Content of text message to display or print.<br>Mandatory, if `OutputFormat` is Text, not allowed otherwise. One instance of `OutputText` per shared format. |
| `outputXHTML` | `string \| undefined` | Optional | XHTML document body containing the message to display or print.<br>Mandatory if `OutputFormat` is XHTML, not allowed otherwise.<br><br>**Constraints**: *Pattern*: `^.{0,262144}$` |
| `outputBarcode` | [`OutputBarcode1 \| undefined`](../../doc/models/output-barcode-1.md) | Optional | Barcode content to display or print.<br>Mandatory if `OutputFormat` is Barcode, not allowed otherwise. |

## Example

```ts
import {
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  OutputContent,
  OutputFormat1Enum,
} from 'adyen';

const outputContent: OutputContent = {
  outputFormat: OutputFormat1Enum.MessageRef,
  predefinedContent: {
    referenceID: 'ReferenceID0',
    language: 'Language2',
  },
  outputText: [
    {
      text: 'Text6',
      characterSet: 194,
      startRow: 74,
      startColumn: 220,
      characterWidth: CharacterWidth1Enum.SingleWidth,
      characterHeight: CharacterHeight1Enum.SingleHeight,
    },
    {
      text: 'Text6',
      characterSet: 194,
      startRow: 74,
      startColumn: 220,
      characterWidth: CharacterWidth1Enum.SingleWidth,
      characterHeight: CharacterHeight1Enum.SingleHeight,
    },
    {
      text: 'Text6',
      characterSet: 194,
      startRow: 74,
      startColumn: 220,
      characterWidth: CharacterWidth1Enum.SingleWidth,
      characterHeight: CharacterHeight1Enum.SingleHeight,
    }
  ],
  outputXHTML: 'OutputXHTML0',
  outputBarcode: {
    barcodeValue: 'BarcodeValue2',
  },
};
```

