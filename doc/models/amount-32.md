
# Amount 32

Required for transactions performed by registered payment facilitators. The amount of the payment corresponding to each sub-merchant. This value will be different than the request amount if shopper is purchasing items at different sub-merchants' shops.

## Structure

`Amount32`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `value` | `bigint` | Required | The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units). |

## Example

```ts
import { Amount32 } from 'adyen';

const amount32: Amount32 = {
  currency: 'currency0',
  value: BigInt(206),
};
```

