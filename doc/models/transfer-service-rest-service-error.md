
# Transfer Service Rest Service Error

## Structure

`TransferServiceRestServiceError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `detail` | `string` | Required | A human-readable explanation specific to this occurrence of the problem. |
| `errorCode` | `string` | Required | A code that identifies the problem type. |
| `instance` | `string \| undefined` | Optional | A unique URI that identifies the specific occurrence of the problem. |
| `invalidFields` | [`InvalidField[] \| undefined`](../../doc/models/invalid-field.md) | Optional | Detailed explanation of each validation error, when applicable. |
| `requestId` | `string \| undefined` | Optional | A unique reference for the request, essentially the same as `pspReference`. |
| `response` | `unknown \| undefined` | Optional | JSON response payload. |
| `routingDetails` | [`RoutingDetails[] \| undefined`](../../doc/models/routing-details.md) | Optional | Detailed explanation of each attempt to route the transfer with the priorities from the request. |
| `status` | `number` | Required | The HTTP status code. |
| `title` | `string` | Required | A short, human-readable summary of the problem type. |
| `type` | `string` | Required | A URI that identifies the problem type, pointing to human-readable documentation on this problem type. |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof TransferServiceRestServiceError) {
    console.log(error.result);
  }
}
```

