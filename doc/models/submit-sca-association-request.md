
# Submit Sca Association Request

*This model accepts additional fields of type unknown.*

## Structure

`SubmitScaAssociationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entities` | [`ScaEntity[]`](../../doc/models/sca-entity.md) | Required | The list of entities to be associated.<br><br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `5` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ScaEntityType4, SubmitScaAssociationRequest } from 'adyen';

const submitScaAssociationRequest: SubmitScaAssociationRequest = {
  entities: [
    {
      id: 'AH9999Z99Z999999ZZZZ9999Z',
      type: ScaEntityType4.AccountHolder,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

