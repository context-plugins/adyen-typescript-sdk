
# Default Error Response Entity

Standardized error response following RFC-7807 format

Find out more here: [https://www.rfc-editor.org/rfc/rfc7807](https://www.rfc-editor.org/rfc/rfc7807)

*This model accepts additional fields of type unknown.*

## Structure

`DefaultErrorResponseEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `detail` | `string \| undefined` | Optional | A human-readable explanation specific to this occurrence of the problem. |
| `errorCode` | `string \| undefined` | Optional | Unique business error code. |
| `instance` | `string \| undefined` | Optional | A URI that identifies the specific occurrence of the problem if applicable. |
| `invalidFields` | [`InvalidField[] \| undefined`](../../doc/models/invalid-field.md) | Optional | Array of fields with validation errors when applicable. |
| `requestId` | `string \| undefined` | Optional | The unique reference for the request. |
| `status` | `number \| undefined` | Optional | The HTTP status code. |
| `title` | `string \| undefined` | Optional | A short, human-readable summary of the problem type. |
| `type` | `string \| undefined` | Optional | A URI that identifies the validation error type. It points to human-readable documentation for the problem type. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DefaultErrorResponseEntity } from 'adyen';

const defaultErrorResponseEntity: DefaultErrorResponseEntity = {
  detail: 'detail6',
  errorCode: 'errorCode6',
  instance: 'instance6',
  invalidFields: [
    {
      message: 'message6',
      name: 'name6',
      value: 'value8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      message: 'message6',
      name: 'name6',
      value: 'value8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      message: 'message6',
      name: 'name6',
      value: 'value8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  requestId: 'requestId2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

