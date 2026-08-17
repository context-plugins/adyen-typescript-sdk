
# Error Field Type

## Structure

`ErrorFieldType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `number \| undefined` | Optional | The validation error code. |
| `errorDescription` | `string \| undefined` | Optional | A description of the validation error. |
| `fieldType` | [`FieldType \| undefined`](../../doc/models/field-type.md) | Optional | The type of error field. |

## Example

```ts
import { ErrorFieldType, FieldNameEnum } from 'adyen';

const errorFieldType: ErrorFieldType = {
  errorCode: 124,
  errorDescription: 'errorDescription2',
  fieldType: {
    field: 'field6',
    fieldName: FieldNameEnum.DrivingLicenceFront,
    shareholderCode: 'shareholderCode0',
  },
};
```

