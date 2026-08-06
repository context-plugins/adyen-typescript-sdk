
# Cash Out Transfer

*This model accepts additional fields of type unknown.*

## Structure

`CashOutTransfer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount5`](../../doc/models/amount-5.md) | Required | - |
| `id` | `string` | Required | The reference of the cashout transfer. |
| `type` | [`Type122`](../../doc/models/type-122.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CashOutTransfer, Type122 } from 'adyen';

const cashOutTransfer: CashOutTransfer = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  id: 'id2',
  type: Type122.CashoutRepayment,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

