
# Balance

*This model accepts additional fields of type unknown.*

## Structure

`Balance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `available` | `bigint` | Required | The balance available for use. |
| `balance` | `bigint` | Required | The sum of the transactions that have already been settled. |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance. |
| `pending` | `bigint \| undefined` | Optional | The sum of the transactions that will be settled in the future. |
| `pendingAvailable` | `bigint \| undefined` | Optional | The balance that will become the available balance after the pending balance is settled.<br><br>The pending available balance is equal to the lower of the following:<br><br>- The `pending` balance<br>- The `pending` balance plus the `available` balance. |
| `reserved` | `bigint` | Required | The balance currently held in reserve. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Balance } from 'adyenlib';

const balance: Balance = {
  available: BigInt(248),
  balance: BigInt(128),
  currency: 'currency4',
  reserved: BigInt(62),
  pending: BigInt(56),
  pendingAvailable: BigInt(248),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

