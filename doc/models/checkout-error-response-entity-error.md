
# Checkout Error Response Entity Error

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

