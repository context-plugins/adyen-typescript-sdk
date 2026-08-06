
# Target 5

*This model accepts additional fields of type unknown.*

## Structure

`Target5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount. |
| `value` | `bigint` | Required | The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Target5 } from 'adyen';

const target5: Target5 = {
  currency: 'currency4',
  value: BigInt(38),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

