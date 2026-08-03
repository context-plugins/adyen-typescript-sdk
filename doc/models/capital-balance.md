
# Capital Balance

Contains information about the balances of the disbursement.

*This model accepts additional fields of type unknown.*

## Structure

`CapitalBalance`

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
import { CapitalBalance } from 'adyenlib';

const capitalBalance: CapitalBalance = {
  currency: 'currency2',
  fee: BigInt(8),
  principal: BigInt(46),
  total: BigInt(86),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

