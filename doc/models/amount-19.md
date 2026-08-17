
# Amount 19

An object specifying the currency and value for which you want to perform an exchange calculation.

## Structure

`Amount19`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes). |
| `value` | `bigint` | Required | The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units). |

## Example

```ts
import { Amount19 } from 'adyen';

const amount19: Amount19 = {
  currency: 'currency4',
  value: BigInt(214),
};
```

