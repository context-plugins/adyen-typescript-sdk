
# Initial Amount

*This model accepts additional fields of type unknown.*

## Structure

`InitialAmount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `value` | `bigint` | Required | The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InitialAmount } from 'adyen';

const initialAmount: InitialAmount = {
  currency: 'currency0',
  value: BigInt(180),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

