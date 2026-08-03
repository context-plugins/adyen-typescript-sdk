
# Merchants Payments Apps 422 Error

*This model accepts additional fields of type unknown.*

## Structure

`MerchantsPaymentsApps422Error`

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
try {
  // make the API call
} catch (error) {
  if (error instanceof MerchantsPaymentsApps422Error) {
    console.log(error.result);
  }
}
```

