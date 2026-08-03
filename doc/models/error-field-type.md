
# Error Field Type

*This model accepts additional fields of type unknown.*

## Structure

`ErrorFieldType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `number \| undefined` | Optional | The validation error code. |
| `errorDescription` | `string \| undefined` | Optional | A description of the validation error. |
| `fieldType` | [`FieldType2 \| undefined`](../../doc/models/field-type-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ErrorFieldType, FieldName } from 'adyenlib';

const errorFieldType: ErrorFieldType = {
  errorCode: 124,
  errorDescription: 'errorDescription2',
  fieldType: {
    field: 'field6',
    fieldName: FieldName.DrivingLicenceFront,
    shareholderCode: 'shareholderCode0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

