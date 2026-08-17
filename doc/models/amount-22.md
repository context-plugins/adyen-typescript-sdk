
# Amount 22

The currency of the amount you converted (the source amount).

## Structure

`Amount22`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes). |
| `value` | `bigint` | Required | The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units). |

## Example

```ts
import { Amount22 } from 'adyen';

const amount22: Amount22 = {
  currency: 'currency2',
  value: BigInt(148),
};
```

