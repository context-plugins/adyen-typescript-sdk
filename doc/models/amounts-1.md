
# Amounts 1

The object that contains the fixed donation amounts that the shopper can select from.

*This model accepts additional fields of type unknown.*

## Structure

`Amounts1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes/). |
| `values` | `bigint[]` | Required | The amounts of the donation (in [minor units](https://docs.adyen.com/development-resources/currency-codes/)). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Amounts1 } from 'adyenlib';

const amounts1: Amounts1 = {
  currency: 'currency6',
  values: [
    BigInt(78),
    BigInt(77)
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

