
# Amount 3

The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both.

*This model accepts additional fields of type unknown.*

## Structure

`Amount3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount. |
| `value` | `bigint` | Required | The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Amount3 } from 'adyenlib';

const amount3: Amount3 = {
  currency: 'currency0',
  value: BigInt(206),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

