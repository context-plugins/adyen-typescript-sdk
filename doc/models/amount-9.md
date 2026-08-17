
# Amount 9

The maximum spendable balance for a single transaction. Applicable to some gift cards.

## Structure

`Amount9`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `value` | `bigint` | Required | The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units). |

## Example

```ts
import { Amount9 } from 'adyen';

const amount9: Amount9 = {
  currency: 'currency2',
  value: BigInt(84),
};
```

