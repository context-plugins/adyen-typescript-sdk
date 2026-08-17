
# Amount 31

The amount that you want to capture. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount.

## Structure

`Amount31`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `value` | `bigint` | Required | The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units). |

## Example

```ts
import { Amount31 } from 'adyen';

const amount31: Amount31 = {
  currency: 'currency0',
  value: BigInt(154),
};
```

