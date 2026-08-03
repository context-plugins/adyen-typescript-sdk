
# Payment Receipt

Customer or Merchant payment receipt.
If the payment receipts are printed by the Sale system and the POI or the Sale does not implement the Print exchange (Basic profile).

*This model accepts additional fields of type unknown.*

## Structure

`PaymentReceipt`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentQualifier` | [`DocumentQualifier1`](../../doc/models/document-qualifier-1.md) | Required | - |
| `integratedPrintFlag` | `boolean \| undefined` | Optional | Type of the print integrated to other prints. |
| `requiredSignatureFlag` | `boolean \| undefined` | Optional | Indicate that the cardholder payment receipt requires a physical signature by the Customer.<br><br>**Default**: `false` |
| `outputContent` | [`OutputContent2`](../../doc/models/output-content-2.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CharacterHeight1,
  CharacterWidth1,
  DocumentQualifier1,
  OutputFormat1,
  PaymentReceipt,
} from 'adyenlib';

const paymentReceipt: PaymentReceipt = {
  documentQualifier: DocumentQualifier1.SaleReceipt,
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

