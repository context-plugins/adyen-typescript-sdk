
# Additional Commission

*This model accepts additional fields of type unknown.*

## Structure

`AdditionalCommission`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string \| undefined` | Optional | Unique identifier of the balance account to which the additional commission is booked. |
| `fixedAmount` | `bigint \| undefined` | Optional | A fixed commission fee, in minor units. |
| `variablePercentage` | `bigint \| undefined` | Optional | A variable commission fee, in basis points. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AdditionalCommission } from 'adyenlib';

const additionalCommission: AdditionalCommission = {
  balanceAccountId: 'balanceAccountId0',
  fixedAmount: BigInt(100),
  variablePercentage: BigInt(64),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

