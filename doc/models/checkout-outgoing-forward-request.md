
# Checkout Outgoing Forward Request

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutOutgoingForwardRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `string` | Required | The request body that you want Adyen to forward to the third party on your behalf, in string format.<br><br>Include key value pairs to specify the payment details, and use [placeholders](https://docs.adyen.com/online-payments/tokenization/forward-payment-details#placeholders) for the values. Adyen replaces the placeholders with the payment details when making the request to the third party.<br><br>When forwarding a network token, include a [condition](https://docs.adyen.com/online-payments/tokenization/forward-payment-details#conditional-placeholders) that checks if the network token exists, and informs Adyen of which fields to send depending on the outcome.<br><br>**Constraints**: *Maximum Length*: `20000` |
| `credentials` | `string \| undefined` | Optional | Your credentials that are needed to authenticate with the third party. |
| `headers` | `Record<string, string> \| undefined` | Optional | The request headers that will be included in the request Adyen makes to the third party on your behalf. Supports the `{{credentials}}` [placeholder](https://docs.adyen.com/online-payments/tokenization/forward-payment-details#placeholders). |
| `httpMethod` | [`HttpMethod`](../../doc/models/http-method.md) | Required | - |
| `urlSuffix` | `string \| undefined` | Optional | The suffix that Adyen needs to append to the `baseUrl` to construct the destination URL that belongs to the third party. This is usually the endpoint name for the request, for example, **/payments**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckoutOutgoingForwardRequest, HttpMethod } from 'adyenlib';

const checkoutOutgoingForwardRequest: CheckoutOutgoingForwardRequest = {
  body: 'body6',
  httpMethod: HttpMethod.Put,
  credentials: 'credentials4',
  headers: {
    'key0': 'headers3',
    'key1': 'headers4',
    'key2': 'headers5'
  },
  urlSuffix: 'urlSuffix6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

