
# Amount Min Max Requirement

*This model accepts additional fields of type unknown.*

## Structure

`AmountMinMaxRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Specifies the eligible amounts for a particular route. |
| `max` | `bigint \| undefined` | Optional | Maximum amount. |
| `min` | `bigint \| undefined` | Optional | Minimum amount. |
| `type` | [`Type810`](../../doc/models/type-810.md) | Required | **amountMinMaxRequirement** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AmountMinMaxRequirement, Type810 } from 'adyen';

const amountMinMaxRequirement: AmountMinMaxRequirement = {
  type: Type810.AmountMinMaxRequirement,
  description: 'description6',
  max: BigInt(18),
  min: BigInt(156),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

