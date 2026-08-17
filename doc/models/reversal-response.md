
# Reversal Response

It conveys Information related to the reversal processed by the POI System.
Content of the Reversal Response message.

## Structure

`ReversalResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |
| `pOIData` | [`POIData4 \| undefined`](../../doc/models/poi-data-4.md) | Optional | Data related to the POI System.<br>If Result is Success. |
| `originalPOITransaction` | [`OriginalPOITransaction \| undefined`](../../doc/models/original-poi-transaction.md) | Optional | Identification of a previous POI transaction.<br>In the Payment Request message, it allows using the card of a previous CardAcquisition or Payment request. |
| `reversedAmount` | `number \| undefined` | Optional | Amount of the payment or loyalty to reverse.<br>Copy.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `paymentReceipt` | [`PaymentReceipt[] \| undefined`](../../doc/models/payment-receipt.md) | Optional | - |

## Example

```ts
import {
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  DocumentQualifier1Enum,
  ErrorCondition1Enum,
  OutputFormat1Enum,
  Result11Enum,
  ReversalResponse,
} from 'adyen';

const reversalResponse: ReversalResponse = {
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
  pOIData: {
    pOITransactionID: {
      transactionID: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
    },
    pOIReconciliationID: 52,
  },
  originalPOITransaction: {
    saleID: 'SaleID6',
    pOIID: 'POIID0',
    pOITransactionID: {
      transactionID: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
    },
    reuseCardDataFlag: false,
    approvalCode: 'ApprovalCode0',
  },
  reversedAmount: 161.34,
  paymentReceipt: [
    {
      documentQualifier: DocumentQualifier1Enum.CustomerReceipt,
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
    {
      documentQualifier: DocumentQualifier1Enum.CustomerReceipt,
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
    }
  ],
};
```

