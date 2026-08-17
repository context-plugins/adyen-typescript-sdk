
# Sca Entity

## Structure

`ScaEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The unique identifier of the entity.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `100` |
| `type` | [`ScaEntityType4Enum`](../../doc/models/sca-entity-type-4-enum.md) | Required | The type of the entity that you are associating with the SCA device.<br><br>Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**. |

## Example

```ts
import { ScaEntity, ScaEntityType4Enum } from 'adyen';

const scaEntity: ScaEntity = {
  id: 'AH9999Z99Z999999ZZZZ9999Z',
  type: ScaEntityType4Enum.AccountHolder,
};
```

