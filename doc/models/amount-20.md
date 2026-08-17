
# Amount 20

## Structure

`Amount20`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO 4217 currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes).<br><br>**Constraints**: *Minimum Length*: `1` |
| `value` | `bigint` | Required | The amount of the transaction in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units) (cents). |

## Example

```ts
import { Amount20 } from 'adyen';

const amount20: Amount20 = {
  currency: 'EUR',
  value: BigInt(499),
};
```

