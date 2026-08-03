
# Field Type 2

*This model accepts additional fields of type unknown.*

## Structure

`FieldType2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | `string \| undefined` | Optional | The full name of the property. |
| `fieldName` | [`FieldName \| undefined`](../../doc/models/field-name.md) | Optional | - |
| `shareholderCode` | `string \| undefined` | Optional | The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FieldName, FieldType2 } from 'adyenlib';

const fieldType2: FieldType2 = {
  field: 'field8',
  fieldName: FieldName.ShopperInteraction,
  shareholderCode: 'shareholderCode2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

