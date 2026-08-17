
# Amount 110

The amount of the payment.

## Structure

`Amount110`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO 4217 currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes).<br><br>**Constraints**: *Minimum Length*: `1` |
| `value` | `bigint` | Required | The amount of the transaction in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units) (cents). |

## Example

```ts
import { Amount110 } from 'adyen';

const amount110: Amount110 = {
  currency: 'EUR',
  value: BigInt(499),
};
```

