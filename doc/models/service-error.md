
# Service Error

*This model accepts additional fields of type unknown.*

## Structure

`ServiceError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `string \| undefined` | Optional | The error code mapped to the error message. |
| `errorType` | `string \| undefined` | Optional | The category of the error. |
| `message` | `string \| undefined` | Optional | A short explanation of the issue. |
| `pspReference` | `string \| undefined` | Optional | The PSP reference of the payment. |
| `status` | `number \| undefined` | Optional | The HTTP response status. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof ServiceError) {
    console.log(error.result);
  }
}
```

