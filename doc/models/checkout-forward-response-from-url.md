
# Checkout Forward Response from Url

## Structure

`CheckoutForwardResponseFromUrl`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `string \| undefined` | Optional | The body of the response Adyen received from the third party, in string format. |
| `headers` | `Record<string, string> \| undefined` | Optional | The HTTP headers of the response Adyen received from the third party. |
| `status` | `number \| undefined` | Optional | The HTTP status of the response Adyen received from the third party. |

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
};
```

