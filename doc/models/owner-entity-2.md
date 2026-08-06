
# Owner Entity 2

Contains information about the resource that owns the document.

*This model accepts additional fields of type unknown.*

## Structure

`OwnerEntity2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Unique identifier of the resource that owns the document. For `type` **legalEntity**, this value is the unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id). For `type` **bankAccount**, this value is the unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id). |
| `type` | `string` | Required | Type of resource that owns the document.<br><br>Possible values: **legalEntity**, **bankAccount**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { OwnerEntity2 } from 'adyen';

const ownerEntity2: OwnerEntity2 = {
  id: 'id6',
  type: 'type4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

