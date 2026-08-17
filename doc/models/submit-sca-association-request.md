
# Submit Sca Association Request

## Structure

`SubmitScaAssociationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entities` | [`ScaEntity[]`](../../doc/models/sca-entity.md) | Required | The list of entities to be associated.<br><br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `5` |

## Example

```ts
import { ScaEntityType4Enum, SubmitScaAssociationRequest } from 'adyen';

const submitScaAssociationRequest: SubmitScaAssociationRequest = {
  entities: [
    {
      id: 'AH9999Z99Z999999ZZZZ9999Z',
      type: ScaEntityType4Enum.AccountHolder,
    }
  ],
};
```

