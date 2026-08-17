
# Refund Funds Transfer Request

## Structure

`RefundFundsTransferRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount`](../../doc/models/amount.md) | Required | The amount to be transferred. |
| `merchantReference` | `string \| undefined` | Optional | A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another. |
| `originalReference` | `string` | Required | A PSP reference of the original fund transfer. |

## Example

```ts
import { RefundFundsTransferRequest } from 'adyen';

const refundFundsTransferRequest: RefundFundsTransferRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  originalReference: 'originalReference2',
  merchantReference: 'merchantReference2',
};
```

