
# Capital Balance

An object containing the details of the existing grant., Contains information about the balances of the disbursement., Contains information about the balances of the grant.

## Structure

`CapitalBalance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). |
| `fee` | `bigint` | Required | Fee amount. |
| `principal` | `bigint` | Required | Principal amount. |
| `total` | `bigint` | Required | Total amount. A sum of principal amount and fee amount. |

## Example

```ts
import { CapitalBalance } from 'adyen';

const capitalBalance: CapitalBalance = {
  currency: 'currency2',
  fee: BigInt(8),
  principal: BigInt(46),
  total: BigInt(86),
};
```

