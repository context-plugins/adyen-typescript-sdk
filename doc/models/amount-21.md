
# Amount 21

The upper bound of the processing tier (i.e., an account holder must have processed less than this amount of money in order to be placed into this tier).

*This model accepts additional fields of type unknown.*

## Structure

`Amount21`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `value` | `bigint` | Required | The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Amount21 } from 'adyen';

const amount21: Amount21 = {
  currency: 'currency8',
  value: BigInt(198),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

