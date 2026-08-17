
# Print Output

## Structure

`PrintOutput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentQualifier` | [`DocumentQualifier2Enum`](../../doc/models/document-qualifier-2-enum.md) | Required | Qualification of the document to print to the Cashier or the Customer. Allows the manager of the printer, Sale or POI Terminal, to send information to a physical printer or to use the paper type accordingly.<br>Possible values:<br><br>* **CashierReceipt**<br>* **CustomerReceipt**<br>* **Document**<br>* **Journal**<br>* **SaleReceipt**<br>* **Voucher** |
| `responseMode` | [`ResponseMode1Enum`](../../doc/models/response-mode-1-enum.md) | Required | Message response awaited by the initiator of the Request. Allows various types and synchronisation of requests for Print or Sound.<br>Possible values:<br><br>* **Immediate**<br>* **NotRequired**<br>* **PrintEnd**<br>* **SoundEnd** |
| `integratedPrintFlag` | `boolean \| undefined` | Optional | Type of the print integrated in other prints. Allows a separated printing (paper cut if available), or integration with the sale receipt or other print. If the printing is integrated, the response is always immediate, even if the `ResponseMode` is set to `PrintEnd`.<br><br>**Default**: `false` |
| `requiredSignatureFlag` | `boolean \| undefined` | Optional | Indicates that the cardholder payment receipt requires a physical signature by the Customer.<br><br>**Default**: `false` |
| `outputContent` | [`OutputContent3`](../../doc/models/output-content-3.md) | Required | Content to display or print. This is a sequence of elements if they have different formats. |

## Example

```ts
import {
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  DocumentQualifier2Enum,
  OutputFormat1Enum,
  PrintOutput,
  ResponseMode1Enum,
} from 'adyen';

const printOutput: PrintOutput = {
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
};
```

