
# Reversal Request 2

Content of the Reversal Request message.

*This model accepts additional fields of type unknown.*

## Structure

`ReversalRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `saleData` | [`SaleData2 \| undefined`](../../doc/models/sale-data-2.md) | Optional | - |
| `originalPoiTransaction` | [`OriginalPoiTransaction3`](../../doc/models/original-poi-transaction-3.md) | Required | - |
| `reversedAmount` | `number \| undefined` | Optional | Amount of the payment or loyalty to reverse.<br>ReversedAmount is implicitly equal to the AuthorizedAmount if absent.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `reversalReason` | [`ReversalReason1`](../../doc/models/reversal-reason-1.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReversalReason1, ReversalRequest2 } from 'adyen';

const reversalRequest2: ReversalRequest2 = {
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
    reuseCardDataFlag: true,
    approvalCode: 'ApprovalCode0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  reversalReason: ReversalReason1.CustCancel,
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
  reversedAmount: 7.6,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

