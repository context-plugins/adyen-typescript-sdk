
# Threshold 3

*This model accepts additional fields of type unknown.*

## Structure

`Threshold3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). |
| `value` | `bigint \| undefined` | Optional | The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Threshold3 } from 'adyen';

const threshold3: Threshold3 = {
  currency: 'currency0',
  value: BigInt(142),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

