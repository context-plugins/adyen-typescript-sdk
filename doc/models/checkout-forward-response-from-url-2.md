
# Checkout Forward Response from Url 2

The details of the response Adyen received from the third party.

## Structure

`CheckoutForwardResponseFromUrl2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `string \| undefined` | Optional | The body of the response Adyen received from the third party, in string format. |
| `headers` | `Record<string, string> \| undefined` | Optional | The HTTP headers of the response Adyen received from the third party. |
| `status` | `number \| undefined` | Optional | The HTTP status of the response Adyen received from the third party. |

## Example

```ts
import { CheckoutForwardResponseFromUrl2 } from 'adyen';

const checkoutForwardResponseFromUrl2: CheckoutForwardResponseFromUrl2 = {
  body: 'body4',
  headers: {
    'key0': 'headers1'
  },
  status: 122,
};
```

