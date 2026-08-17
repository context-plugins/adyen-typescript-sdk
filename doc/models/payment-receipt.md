
# Payment Receipt

Customer or Merchant payment receipt.
If the payment receipts are printed by the Sale system and the POI or the Sale does not implement the Print exchange (Basic profile).

## Structure

`PaymentReceipt`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentQualifier` | [`DocumentQualifier1Enum`](../../doc/models/document-qualifier-1-enum.md) | Required | Qualification of the document to print to the Cashier or the Customer.<br>SaleReceipt or CashierReceipt.<br>Possible values:<br><br>* **CashierReceipt**<br>* **CustomerReceipt**<br>* **Document**<br>* **Journal**<br>* **SaleReceipt**<br>* **Voucher** |
| `integratedPrintFlag` | `boolean \| undefined` | Optional | Type of the print integrated to other prints. |
| `requiredSignatureFlag` | `boolean \| undefined` | Optional | Indicate that the cardholder payment receipt requires a physical signature by the Customer.<br><br>**Default**: `false` |
| `outputContent` | [`OutputContent1`](../../doc/models/output-content-1.md) | Required | Content to display or print. |

## Example

```ts
import {
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  DocumentQualifier1Enum,
  OutputFormat1Enum,
  PaymentReceipt,
} from 'adyen';

const paymentReceipt: PaymentReceipt = {
  documentQualifier: DocumentQualifier1Enum.SaleReceipt,
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
};
```

