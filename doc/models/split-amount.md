
# Split Amount

The amount of the split item.

* Required for all split types in the [Classic Platforms integration](https://docs.adyen.com/classic-platforms).

* Required if `type` is **BalanceAccount**, **Commission**, **Surcharge**, **Default**, or **VAT** in your [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model) integration., The amount of the split item.

* Required for all split types in the [Classic Platforms integration](https://docs.adyen.com/classic-platforms).

* Required if `type` is **BalanceAccount**, **Commission**, **Default**, or **VAT** in your [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model) integration.

## Structure

`SplitAmount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). By default, this is the original payment currency.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `value` | `bigint` | Required | The value of the split amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes). |

## Example

```ts
import { SplitAmount } from 'adyen';

const splitAmount: SplitAmount = {
  value: BigInt(218),
  currency: 'currency8',
};
```

