
# Loyalty Response 2

Content of the Loyalty Response message.

*This model accepts additional fields of type unknown.*

## Structure

`LoyaltyResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response3`](../../doc/models/response-3.md) | Required | - |
| `saleData` | [`SaleData2`](../../doc/models/sale-data-2.md) | Required | - |
| `poiData` | [`PoiData2`](../../doc/models/poi-data-2.md) | Required | - |
| `loyaltyResult` | [`LoyaltyResult[] \| undefined`](../../doc/models/loyalty-result.md) | Optional | Data related to the result of a processed loyalty transaction.<br>If loyalty account identified. |
| `paymentReceipt` | [`PaymentReceipt[] \| undefined`](../../doc/models/payment-receipt.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CharacterHeight1,
  CharacterWidth1,
  DocumentQualifier1,
  EntryMode,
  ErrorCondition1,
  IdentificationSupport1,
  IdentificationType11,
  LoyaltyResponse2,
  OutputFormat1,
  Result11,
} from 'adyen';

const loyaltyResponse2: LoyaltyResponse2 = {
  response: {
    result: Result11.Partial,
    errorCondition: ErrorCondition1.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  saleData: {
    saleTransactionId: {
      transactionId: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    operatorId: 'OperatorID8',
    operatorLanguage: 'OperatorLanguage2',
    shiftNumber: 'ShiftNumber0',
    saleReferenceId: 'SaleReferenceID8',
    saleTerminalData: {
      totalsGroupId: 'TotalsGroupID4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  poiData: {
    poiTransactionId: {
      transactionId: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    poiReconciliationId: 52,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  loyaltyResult: [
    {
      loyaltyAccount: {
        loyaltyAccountId: {
          entryMode: [
            EntryMode.File
          ],
          identificationType: IdentificationType11.IsoTrack2,
          loyaltyId: 'LoyaltyID4',
          identificationSupport: IdentificationSupport1.HybridCard,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        loyaltyBrand: 'LoyaltyBrand0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      currentBalance: 171.12,
      loyaltyAcquirerData: {
        loyaltyAcquirerId: 'LoyaltyAcquirerID4',
        approvalCode: 'ApprovalCode4',
        loyaltyTransactionId: {
          transactionId: 'TransactionID6',
          timeStamp: '2016-03-13T12:52:32.123Z',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        hostReconciliationId: 'HostReconciliationID4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      loyaltyAccount: {
        loyaltyAccountId: {
          entryMode: [
            EntryMode.File
          ],
          identificationType: IdentificationType11.IsoTrack2,
          loyaltyId: 'LoyaltyID4',
          identificationSupport: IdentificationSupport1.HybridCard,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        loyaltyBrand: 'LoyaltyBrand0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      currentBalance: 171.12,
      loyaltyAcquirerData: {
        loyaltyAcquirerId: 'LoyaltyAcquirerID4',
        approvalCode: 'ApprovalCode4',
        loyaltyTransactionId: {
          transactionId: 'TransactionID6',
          timeStamp: '2016-03-13T12:52:32.123Z',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        hostReconciliationId: 'HostReconciliationID4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      loyaltyAccount: {
        loyaltyAccountId: {
          entryMode: [
            EntryMode.File
          ],
          identificationType: IdentificationType11.IsoTrack2,
          loyaltyId: 'LoyaltyID4',
          identificationSupport: IdentificationSupport1.HybridCard,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        loyaltyBrand: 'LoyaltyBrand0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      currentBalance: 171.12,
      loyaltyAcquirerData: {
        loyaltyAcquirerId: 'LoyaltyAcquirerID4',
        approvalCode: 'ApprovalCode4',
        loyaltyTransactionId: {
          transactionId: 'TransactionID6',
          timeStamp: '2016-03-13T12:52:32.123Z',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        hostReconciliationId: 'HostReconciliationID4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  paymentReceipt: [
    {
      documentQualifier: DocumentQualifier1.CustomerReceipt,
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

