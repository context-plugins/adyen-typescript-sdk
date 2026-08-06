
# Value 7

*This model accepts additional fields of type unknown.*

## Structure

`Value7`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount. |
| `value` | `bigint` | Required | The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Value7 } from 'adyen';

const value7: Value7 = {
  currency: 'currency8',
  value: BigInt(184),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

