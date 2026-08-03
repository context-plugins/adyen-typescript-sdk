
# Field Type

The type of error field.

*This model accepts additional fields of type unknown.*

## Structure

`FieldType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | `string \| undefined` | Optional | The full name of the property. |
| `fieldName` | [`FieldName \| undefined`](../../doc/models/field-name.md) | Optional | - |
| `shareholderCode` | `string \| undefined` | Optional | The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FieldName, FieldType } from 'adyenlib';

const fieldType: FieldType = {
  field: 'field6',
  fieldName: FieldName.DrivingLicenceFront,
  shareholderCode: 'shareholderCode0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

