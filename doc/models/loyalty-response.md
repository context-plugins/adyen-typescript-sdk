
# Loyalty Response

It conveys Information related to the Loyalty transaction processed by the POI System.
Content of the Loyalty Response message.

## Structure

`LoyaltyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |
| `saleData` | [`SaleData1`](../../doc/models/sale-data-1.md) | Required | Data related to the Sale System. |
| `pOIData` | [`POIData1`](../../doc/models/poi-data-1.md) | Required | Data related to the POI System. |
| `loyaltyResult` | [`LoyaltyResult[] \| undefined`](../../doc/models/loyalty-result.md) | Optional | Data related to the result of a processed loyalty transaction.<br>If loyalty account identified. |
| `paymentReceipt` | [`PaymentReceipt[] \| undefined`](../../doc/models/payment-receipt.md) | Optional | - |

## Example

```ts
import {
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  DocumentQualifier1Enum,
  EntryModeEnum,
  ErrorCondition1Enum,
  IdentificationSupport1Enum,
  IdentificationType11Enum,
  LoyaltyResponse,
  OutputFormat1Enum,
  Result11Enum,
} from 'adyen';

const loyaltyResponse: LoyaltyResponse = {
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
  saleData: {
    saleTransactionID: {
      transactionID: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
    },
    operatorID: 'OperatorID8',
    operatorLanguage: 'OperatorLanguage2',
    shiftNumber: 'ShiftNumber0',
    saleReferenceID: 'SaleReferenceID8',
    saleTerminalData: {
      totalsGroupID: 'TotalsGroupID4',
    },
  },
  pOIData: {
    pOITransactionID: {
      transactionID: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
    },
    pOIReconciliationID: 52,
  },
  loyaltyResult: [
    {
      loyaltyAccount: {
        loyaltyAccountID: {
          entryMode: [
            EntryModeEnum.File
          ],
          identificationType: IdentificationType11Enum.ISOTrack2,
          loyaltyID: 'LoyaltyID4',
          identificationSupport: IdentificationSupport1Enum.HybridCard,
        },
        loyaltyBrand: 'LoyaltyBrand0',
      },
      currentBalance: 171.12,
      loyaltyAcquirerData: {
        loyaltyAcquirerID: 'LoyaltyAcquirerID4',
        approvalCode: 'ApprovalCode4',
        loyaltyTransactionID: {
          transactionID: 'TransactionID6',
          timeStamp: '2016-03-13T12:52:32.123Z',
        },
        hostReconciliationID: 'HostReconciliationID4',
      },
    },
    {
      loyaltyAccount: {
        loyaltyAccountID: {
          entryMode: [
            EntryModeEnum.File
          ],
          identificationType: IdentificationType11Enum.ISOTrack2,
          loyaltyID: 'LoyaltyID4',
          identificationSupport: IdentificationSupport1Enum.HybridCard,
        },
        loyaltyBrand: 'LoyaltyBrand0',
      },
      currentBalance: 171.12,
      loyaltyAcquirerData: {
        loyaltyAcquirerID: 'LoyaltyAcquirerID4',
        approvalCode: 'ApprovalCode4',
        loyaltyTransactionID: {
          transactionID: 'TransactionID6',
          timeStamp: '2016-03-13T12:52:32.123Z',
        },
        hostReconciliationID: 'HostReconciliationID4',
      },
    },
    {
      loyaltyAccount: {
        loyaltyAccountID: {
          entryMode: [
            EntryModeEnum.File
          ],
          identificationType: IdentificationType11Enum.ISOTrack2,
          loyaltyID: 'LoyaltyID4',
          identificationSupport: IdentificationSupport1Enum.HybridCard,
        },
        loyaltyBrand: 'LoyaltyBrand0',
      },
      currentBalance: 171.12,
      loyaltyAcquirerData: {
        loyaltyAcquirerID: 'LoyaltyAcquirerID4',
        approvalCode: 'ApprovalCode4',
        loyaltyTransactionID: {
          transactionID: 'TransactionID6',
          timeStamp: '2016-03-13T12:52:32.123Z',
        },
        hostReconciliationID: 'HostReconciliationID4',
      },
    }
  ],
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
    }
  ],
};
```

