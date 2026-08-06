
# Stored Value Request 2

Content of the Stored Value Request message.

*This model accepts additional fields of type unknown.*

## Structure

`StoredValueRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `saleData` | [`SaleData2`](../../doc/models/sale-data-2.md) | Required | - |
| `storedValueData` | [`StoredValueData[]`](../../doc/models/stored-value-data.md) | Required | Data related to the stored value card. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EntryMode,
  IdentificationType11,
  StoredValueAccountType1,
  StoredValueRequest2,
  StoredValueTransactionType1,
} from 'adyen';

const storedValueRequest2: StoredValueRequest2 = {
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
  storedValueData: [
    {
      storedValueTransactionType: StoredValueTransactionType1.Reserve,
      storedValueProvider: 'StoredValueProvider2',
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
      originalPoiTransaction: {
        saleId: 'SaleID6',
        poiid: 'POIID0',
        poiTransactionId: {
          transactionId: 'TransactionID2',
          timeStamp: '2016-03-13T12:52:32.123Z',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        reuseCardDataFlag: false,
        approvalCode: 'ApprovalCode0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      productCode: 20,
      eanUpc: 194,
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

