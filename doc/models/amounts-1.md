
# Amounts 1

The object that contains the fixed donation amounts that the shopper can select from.

## Structure

`Amounts1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes/). |
| `values` | `bigint[]` | Required | The amounts of the donation (in [minor units](https://docs.adyen.com/development-resources/currency-codes/)). |

## Example

```ts
import { Amounts1 } from 'adyen';

const amounts1: Amounts1 = {
  currency: 'currency6',
  values: [
    BigInt(78),
    BigInt(77)
  ],
};
```

