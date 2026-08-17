
# Default Error Response Entity Error

Standardized error response following RFC-7807 format

Find out more here: [https://www.rfc-editor.org/rfc/rfc7807](https://www.rfc-editor.org/rfc/rfc7807)

## Structure

`DefaultErrorResponseEntityError`

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

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof DefaultErrorResponseEntityError) {
    console.log(error.result);
  }
}
```

