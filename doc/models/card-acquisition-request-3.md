
# Card Acquisition Request 3

*This model accepts additional fields of type unknown.*

## Structure

`CardAcquisitionRequest3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `saleData` | [`SaleData2`](../../doc/models/sale-data-2.md) | Required | - |
| `cardAcquisitionTransaction` | [`CardAcquisitionTransaction`](../../doc/models/card-acquisition-transaction.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CardAcquisitionRequest3,
  ForceEntryMode,
  LoyaltyHandling2,
} from 'adyenlib';

const cardAcquisitionRequest3: CardAcquisitionRequest3 = {
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
  cardAcquisitionTransaction: {
    allowedPaymentBrand: [
      'AllowedPaymentBrand6',
      'AllowedPaymentBrand7'
    ],
    allowedLoyaltyBrand: [
      'AllowedLoyaltyBrand4'
    ],
    loyaltyHandling: LoyaltyHandling2.Processed,
    customerLanguage: 'CustomerLanguage8',
    forceEntryMode: [
      ForceEntryMode.Icc
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

