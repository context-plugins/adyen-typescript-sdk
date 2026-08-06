
# Checkout Forward Response from Url

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutForwardResponseFromUrl`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `string \| undefined` | Optional | The body of the response Adyen received from the third party, in string format. |
| `headers` | `Record<string, string> \| undefined` | Optional | The HTTP headers of the response Adyen received from the third party. |
| `status` | `number \| undefined` | Optional | The HTTP status of the response Adyen received from the third party. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckoutForwardResponseFromUrl } from 'adyen';

const checkoutForwardResponseFromUrl: CheckoutForwardResponseFromUrl = {
  body: 'body6',
  headers: {
    'key0': 'headers3',
    'key1': 'headers4'
  },
  status: 116,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

