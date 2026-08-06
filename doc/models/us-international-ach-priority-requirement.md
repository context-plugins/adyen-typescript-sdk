
# Us International Ach Priority Requirement

*This model accepts additional fields of type unknown.*

## Structure

`UsInternationalAchPriorityRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Specifies that transactions deemed to be International ACH (IAT) per OFAC/NACHA rules cannot have fast priority. |
| `type` | [`Type393`](../../doc/models/type-393.md) | Required | **usInternationalAchPriorityRequirement** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Type393, UsInternationalAchPriorityRequirement } from 'adyen';

const usInternationalAchPriorityRequirement: UsInternationalAchPriorityRequirement = {
  type: Type393.UsInternationalAchPriorityRequirement,
  description: 'description0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

