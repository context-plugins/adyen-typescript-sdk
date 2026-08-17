
# Commission

## Structure

`Commission`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fixedAmount` | `bigint \| undefined` | Optional | A fixed commission fee, in minor units. |
| `variablePercentage` | `bigint \| undefined` | Optional | A variable commission fee, in basis points. |

## Example

```ts
import { Commission } from 'adyen';

const commission: Commission = {
  fixedAmount: BigInt(112),
  variablePercentage: BigInt(52),
};
```

