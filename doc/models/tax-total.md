
# Tax Total

*This model accepts additional fields of type unknown.*

## Structure

`TaxTotal`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount2 \| undefined`](../../doc/models/amount-2.md) | Optional | The transaction amount used as a base for the cost estimation. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TaxTotal } from 'adyenlib';

const taxTotal: TaxTotal = {
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

