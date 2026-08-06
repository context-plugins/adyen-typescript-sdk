
# Additional Commission 1

Defines whether to book an additional commission for payments to your user's balance account. The commission amount can be defined as a fixed amount (specified in minor units), a percentage (specified in basis points), or both.

*This model accepts additional fields of type unknown.*

## Structure

`AdditionalCommission1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string \| undefined` | Optional | Unique identifier of the balance account to which the additional commission is booked. |
| `fixedAmount` | `bigint \| undefined` | Optional | A fixed commission fee, in minor units. |
| `variablePercentage` | `bigint \| undefined` | Optional | A variable commission fee, in basis points. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AdditionalCommission1 } from 'adyen';

const additionalCommission1: AdditionalCommission1 = {
  balanceAccountId: 'balanceAccountId6',
  fixedAmount: BigInt(204),
  variablePercentage: BigInt(216),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

