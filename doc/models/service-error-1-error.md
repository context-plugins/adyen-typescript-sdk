
# Service Error 1 Error

*This model accepts additional fields of type unknown.*

## Structure

`ServiceError1Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | Contains additional information about the payment. Some data fields are included only if you select them first. Go to **Customer Area** > **Developers** > **Additional data**. |
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
  if (error instanceof ServiceError1Error) {
    console.log(error.result);
  }
}
```

