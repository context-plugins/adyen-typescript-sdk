
# Amount 42

For a billing plan where the payment amounts are variable, the minimum amount to charge the shopper for each recurring payment. When a shopper approves the billing plan, they can also specify a maximum amount in their banking app.

## Structure

`Amount42`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `value` | `bigint` | Required | The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units). |

## Example

```ts
import { Amount42 } from 'adyen';

const amount42: Amount42 = {
  currency: 'currency8',
  value: BigInt(190),
};
```

