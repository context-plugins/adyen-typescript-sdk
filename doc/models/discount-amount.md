
# Discount Amount

*This model accepts additional fields of type unknown.*

## Structure

`DiscountAmount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `value` | `bigint` | Required | The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DiscountAmount } from 'adyen';

const discountAmount: DiscountAmount = {
  currency: 'currency8',
  value: BigInt(168),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

