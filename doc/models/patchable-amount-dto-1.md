
# Patchable Amount Dto 1

The balance threshold that triggers the top-up. If the balance falls below this amount, a top-up is initiated.

*This model accepts additional fields of type unknown.*

## Structure

`PatchableAmountDto1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). |
| `value` | `bigint \| undefined` | Optional | The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PatchableAmountDto1 } from 'adyenlib';

const patchableAmountDto1: PatchableAmountDto1 = {
  currency: 'currency0',
  value: BigInt(12),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

