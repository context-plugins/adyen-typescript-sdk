
# Print Request

Content of the Print Request message.
It conveys the complete data to print and how to process the print.

*This model accepts additional fields of type unknown.*

## Structure

`PrintRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `printOutput` | [`PrintOutput`](../../doc/models/print-output.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CharacterHeight1,
  CharacterWidth1,
  DocumentQualifier2,
  OutputFormat1,
  PrintRequest,
  ResponseMode1,
} from 'adyen';

const printRequest: PrintRequest = {
  printOutput: {
    documentQualifier: DocumentQualifier2.CustomerReceipt,
    responseMode: ResponseMode1.PrintEnd,
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
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

