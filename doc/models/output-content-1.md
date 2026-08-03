
# Output Content 1

Content to display or print.

*This model accepts additional fields of type unknown.*

## Structure

`OutputContent1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `outputFormat` | [`OutputFormat1`](../../doc/models/output-format-1.md) | Required | - |
| `predefinedContent` | [`PredefinedContent2 \| undefined`](../../doc/models/predefined-content-2.md) | Optional | - |
| `outputText` | [`OutputText[] \| undefined`](../../doc/models/output-text.md) | Optional | Content of text message to display or print.<br>Mandatory, if `OutputFormat` is Text, not allowed otherwise. One instance of `OutputText` per shared format. |
| `outputXhtml` | `string \| undefined` | Optional | XHTML document body containing the message to display or print.<br>Mandatory if `OutputFormat` is XHTML, not allowed otherwise.<br><br>**Constraints**: *Pattern*: `^.{0,262144}$` |
| `outputBarcode` | [`OutputBarcode \| undefined`](../../doc/models/output-barcode.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CharacterHeight1,
  CharacterWidth1,
  OutputContent1,
  OutputFormat1,
} from 'adyenlib';

const outputContent1: OutputContent1 = {
  outputFormat: OutputFormat1.MessageRef,
  predefinedContent: {
    referenceId: 'ReferenceID0',
    language: 'Language2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  outputText: [
    {
      text: 'Text6',
      characterSet: 194,
      startRow: 74,
      startColumn: 220,
      characterWidth: CharacterWidth1.SingleWidth,
      characterHeight: CharacterHeight1.SingleHeight,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      text: 'Text6',
      characterSet: 194,
      startRow: 74,
      startColumn: 220,
      characterWidth: CharacterWidth1.SingleWidth,
      characterHeight: CharacterHeight1.SingleHeight,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      text: 'Text6',
      characterSet: 194,
      startRow: 74,
      startColumn: 220,
      characterWidth: CharacterWidth1.SingleWidth,
      characterHeight: CharacterHeight1.SingleHeight,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  outputXhtml: 'OutputXHTML4',
  outputBarcode: {
    barcodeValue: 'BarcodeValue2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

