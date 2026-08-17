
# Amount 34

An object specifying the currency and value to which you want to convert the source amount (the target amount).

## Structure

`Amount34`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes). |
| `value` | `bigint` | Required | The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units). |

## Example

```ts
import { Amount34 } from 'adyen';

const amount34: Amount34 = {
  currency: 'currency6',
  value: BigInt(48),
};
```

