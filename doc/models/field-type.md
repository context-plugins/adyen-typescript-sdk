
# Field Type

The type of error field.

## Structure

`FieldType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | `string \| undefined` | Optional | The full name of the property. |
| `fieldName` | [`FieldNameEnum \| undefined`](../../doc/models/field-name-enum.md) | Optional | The type of the field. |
| `shareholderCode` | `string \| undefined` | Optional | The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder. |

## Example

```ts
import { FieldNameEnum, FieldType } from 'adyen';

const fieldType: FieldType = {
  field: 'field6',
  fieldName: FieldNameEnum.DrivingLicenceFront,
  shareholderCode: 'shareholderCode0',
};
```

