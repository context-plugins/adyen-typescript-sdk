
# Stored Value Response 2

Content of the Stored Value Response message.

*This model accepts additional fields of type unknown.*

## Structure

`StoredValueResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response3`](../../doc/models/response-3.md) | Required | - |
| `saleData` | [`SaleData2`](../../doc/models/sale-data-2.md) | Required | - |
| `poiData` | [`PoiData2`](../../doc/models/poi-data-2.md) | Required | - |
| `storedValueResult` | [`StoredValueResult[] \| undefined`](../../doc/models/stored-value-result.md) | Optional | Result of loading/reloading a stored value card.<br>If StoredValueResponse.Result is Success or Partial, one entry per StoredValueRequest.StoredValueData loaded or activated. |
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
  IdentificationType11,
  OutputFormat1,
  Result11,
  StoredValueAccountType1,
  StoredValueResponse2,
  StoredValueTransactionType2,
} from 'adyen';

const storedValueResponse2: StoredValueResponse2 = {
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
  storedValueResult: [
    {
      storedValueTransactionType: StoredValueTransactionType2.Reverse,
      productCode: 20,
      eanUpc: 136,
      itemAmount: 5.58,
      currency: 'Currency2',
      storedValueAccountStatus: {
        storedValueAccountId: {
          storedValueAccountType: StoredValueAccountType1.PhoneCard,
          entryMode: [
            EntryMode.MagStripe,
            EntryMode.Scanned
          ],
          identificationType: IdentificationType11.PhoneNumber,
          storedValueId: 'StoredValueID8',
          storedValueProvider: 'StoredValueProvider4',
          ownerName: 'OwnerName0',
          expiryDate: 4,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        currentBalance: 45.56,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      storedValueTransactionType: StoredValueTransactionType2.Reverse,
      productCode: 20,
      eanUpc: 136,
      itemAmount: 5.58,
      currency: 'Currency2',
      storedValueAccountStatus: {
        storedValueAccountId: {
          storedValueAccountType: StoredValueAccountType1.PhoneCard,
          entryMode: [
            EntryMode.MagStripe,
            EntryMode.Scanned
          ],
          identificationType: IdentificationType11.PhoneNumber,
          storedValueId: 'StoredValueID8',
          storedValueProvider: 'StoredValueProvider4',
          ownerName: 'OwnerName0',
          expiryDate: 4,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        currentBalance: 45.56,
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
    },
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

