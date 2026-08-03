
# Checkout Error Response Entity Error

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutErrorResponseEntityError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `string` | Required | - |
| `errorType` | `string` | Required | - |
| `message` | `string` | Required | - |
| `pspReference` | `string \| undefined` | Optional | - |
| `status` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof CheckoutErrorResponseEntityError) {
    console.log(error.result);
  }
}
```

