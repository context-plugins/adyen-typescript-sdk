
# Print Output 2

Information to print and how to process it.

*This model accepts additional fields of type unknown.*

## Structure

`PrintOutput2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentQualifier` | [`DocumentQualifier2`](../../doc/models/document-qualifier-2.md) | Required | - |
| `responseMode` | [`ResponseMode1`](../../doc/models/response-mode-1.md) | Required | - |
| `integratedPrintFlag` | `boolean \| undefined` | Optional | Type of the print integrated in other prints. Allows a separated printing (paper cut if available), or integration with the sale receipt or other print. If the printing is integrated, the response is always immediate, even if the `ResponseMode` is set to `PrintEnd`.<br><br>**Default**: `false` |
| `requiredSignatureFlag` | `boolean \| undefined` | Optional | Indicates that the cardholder payment receipt requires a physical signature by the Customer.<br><br>**Default**: `false` |
| `outputContent` | [`OutputContent2`](../../doc/models/output-content-2.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CharacterHeight1,
  CharacterWidth1,
  DocumentQualifier2,
  OutputFormat1,
  PrintOutput2,
  ResponseMode1,
} from 'adyen';

const printOutput2: PrintOutput2 = {
  documentQualifier: DocumentQualifier2.CustomerReceipt,
  responseMode: ResponseMode1.NotRequired,
  outputContent: {
    outputFormat: OutputFormat1.Xhtml,
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
      }
    ],
    outputXhtml: 'OutputXHTML2',
    outputBarcode: {
      barcodeValue: 'BarcodeValue2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  integratedPrintFlag: false,
  requiredSignatureFlag: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

