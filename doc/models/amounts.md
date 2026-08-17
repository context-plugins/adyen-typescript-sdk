
# Amounts

## Structure

`Amounts`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes/). |
| `values` | `bigint[]` | Required | The amounts of the donation (in [minor units](https://docs.adyen.com/development-resources/currency-codes/)). |

## Example

```ts
import { Amounts } from 'adyen';

const amounts: Amounts = {
  currency: 'currency6',
  values: [
    BigInt(48),
    BigInt(49)
  ],
};
```

