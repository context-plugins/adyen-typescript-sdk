
# Threshold 2

*This model accepts additional fields of type unknown.*

## Structure

`Threshold2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount. |
| `value` | `bigint` | Required | The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Threshold2 } from 'adyen';

const threshold2: Threshold2 = {
  currency: 'currency0',
  value: BigInt(14),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

