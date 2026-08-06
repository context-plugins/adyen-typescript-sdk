
# Amount 4

The maximum amount that payouts are limited to. Only applies if payouts are allowed but limited.

*This model accepts additional fields of type unknown.*

## Structure

`Amount4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `value` | `bigint` | Required | The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Amount4 } from 'adyen';

const amount4: Amount4 = {
  currency: 'currency2',
  value: BigInt(200),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

