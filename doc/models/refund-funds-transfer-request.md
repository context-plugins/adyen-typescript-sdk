
# Refund Funds Transfer Request

*This model accepts additional fields of type unknown.*

## Structure

`RefundFundsTransferRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount16`](../../doc/models/amount-16.md) | Required | - |
| `merchantReference` | `string \| undefined` | Optional | A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another. |
| `originalReference` | `string` | Required | A PSP reference of the original fund transfer. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RefundFundsTransferRequest } from 'adyen';

const refundFundsTransferRequest: RefundFundsTransferRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  originalReference: 'originalReference2',
  merchantReference: 'merchantReference2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

