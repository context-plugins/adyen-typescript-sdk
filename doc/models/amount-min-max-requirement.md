
# Amount Min Max Requirement

## Structure

`AmountMinMaxRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Specifies the eligible amounts for a particular route. |
| `max` | `bigint \| undefined` | Optional | Maximum amount. |
| `min` | `bigint \| undefined` | Optional | Minimum amount. |
| `type` | `string` | Required, Constant | **amountMinMaxRequirement**<br><br>**Value**: `'amountMinMaxRequirement'` |

## Example

```ts
import { AmountMinMaxRequirement } from 'adyen';

const amountMinMaxRequirement: AmountMinMaxRequirement = {
  type: 'amountMinMaxRequirement',
  description: 'description6',
  max: BigInt(18),
  min: BigInt(156),
};
```

