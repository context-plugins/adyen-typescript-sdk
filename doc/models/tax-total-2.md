
# Tax Total 2

Total tax amount from the order.

*This model accepts additional fields of type unknown.*

## Structure

`TaxTotal2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount2 \| undefined`](../../doc/models/amount-2.md) | Optional | The transaction amount used as a base for the cost estimation. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TaxTotal2 } from 'adyen';

const taxTotal2: TaxTotal2 = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

