
# Amount 43

For a billing plan where the payment amount is fixed, the amount the shopper will be charged for each recurring payment.

## Structure

`Amount43`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `value` | `bigint` | Required | The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units). |

## Example

```ts
import { Amount43 } from 'adyen';

const amount43: Amount43 = {
  currency: 'currency4',
  value: BigInt(46),
};
```

