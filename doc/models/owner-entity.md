
# Owner Entity

*This model accepts additional fields of type unknown.*

## Structure

`OwnerEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Unique identifier of the resource that owns the document. For `type` **legalEntity**, this value is the unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id). For `type` **bankAccount**, this value is the unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id). |
| `type` | `string` | Required | Type of resource that owns the document.<br><br>Possible values: **legalEntity**, **bankAccount**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { OwnerEntity } from 'adyen';

const ownerEntity: OwnerEntity = {
  id: 'id8',
  type: 'type8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

