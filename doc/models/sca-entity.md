
# Sca Entity

*This model accepts additional fields of type unknown.*

## Structure

`ScaEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The unique identifier of the entity.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `100` |
| `type` | [`ScaEntityType4`](../../doc/models/sca-entity-type-4.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ScaEntity, ScaEntityType4 } from 'adyen';

const scaEntity: ScaEntity = {
  id: 'AH9999Z99Z999999ZZZZ9999Z',
  type: ScaEntityType4.AccountHolder,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

