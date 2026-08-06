
# Amount

*This model accepts additional fields of type unknown.*

## Structure

`Amount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO 4217 currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes).<br><br>**Constraints**: *Minimum Length*: `1` |
| `value` | `bigint` | Required | The amount of the transaction in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units) (cents). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Amount } from 'adyen';

const amount: Amount = {
  currency: 'EUR',
  value: BigInt(499),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

