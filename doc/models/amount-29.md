
# Amount 29

The updated amount. The `currency` must match the currency used in authorisation.

## Structure

`Amount29`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `value` | `bigint` | Required | The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units). |

## Example

```ts
import { Amount29 } from 'adyen';

const amount29: Amount29 = {
  currency: 'currency6',
  value: BigInt(100),
};
```

