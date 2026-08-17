
# Commission 1

Defines your platform's commission for the processed payments as a fixed amount (specified in minor units), a percentage (specified in basis points), or both. The commission is booked to your platform's liable balance account.

## Structure

`Commission1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fixedAmount` | `bigint \| undefined` | Optional | A fixed commission fee, in minor units. |
| `variablePercentage` | `bigint \| undefined` | Optional | A variable commission fee, in basis points. |

## Example

```ts
import { Commission1 } from 'adyen';

const commission1: Commission1 = {
  fixedAmount: BigInt(106),
  variablePercentage: BigInt(58),
};
```

