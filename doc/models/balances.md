
# Balances

*This model accepts additional fields of type unknown.*

## Structure

`Balances`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). |
| `fee` | `bigint` | Required | Fee amount. |
| `principal` | `bigint` | Required | Principal amount. |
| `total` | `bigint` | Required | Total amount. A sum of principal amount and fee amount. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Balances } from 'adyenlib';

const balances: Balances = {
  currency: 'currency0',
  fee: BigInt(72),
  principal: BigInt(110),
  total: BigInt(150),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

