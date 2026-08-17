
# Patchable Amount DTO 1

The balance threshold that triggers the top-up. If the balance falls below this amount, a top-up is initiated.

## Structure

`PatchableAmountDTO1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). |
| `value` | `bigint \| undefined` | Optional | The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes). |

## Example

```ts
import { PatchableAmountDTO1 } from 'adyen';

const patchableAmountDTO1: PatchableAmountDTO1 = {
  currency: 'currency2',
  value: BigInt(8),
};
```

