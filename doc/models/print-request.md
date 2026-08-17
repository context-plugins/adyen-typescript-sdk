
# Print Request

Content of the Print Request message.
It conveys the complete data to print and how to process the print.

## Structure

`PrintRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `printOutput` | [`PrintOutput2`](../../doc/models/print-output-2.md) | Required | Information to print and how to process it. |

## Example

```ts
import {
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  DocumentQualifier2Enum,
  OutputFormat1Enum,
  PrintRequest,
  ResponseMode1Enum,
} from 'adyen';

const printRequest: PrintRequest = {
  printOutput: {
    documentQualifier: DocumentQualifier2Enum.CustomerReceipt,
    responseMode: ResponseMode1Enum.PrintEnd,
    outputContent: {
      outputFormat: OutputFormat1Enum.XHTML,
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
        }
      ],
      outputXHTML: 'OutputXHTML2',
      outputBarcode: {
        barcodeValue: 'BarcodeValue2',
      },
    },
    integratedPrintFlag: false,
    requiredSignatureFlag: false,
  },
};
```

