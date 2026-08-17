
# Print Request 2

Content of the Print Request message.

## Structure

`PrintRequest2`

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
  PrintRequest2,
  ResponseMode1Enum,
} from 'adyen';

const printRequest2: PrintRequest2 = {
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

