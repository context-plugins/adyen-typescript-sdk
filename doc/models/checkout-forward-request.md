
# Checkout Forward Request

## Structure

`CheckoutForwardRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount11 \| undefined`](../../doc/models/amount-11.md) | Optional | The amount of the forwarded payment. |
| `baseUrl` | `string` | Required | The base URL of the third party API, where Adyen will send the request to forward the payment details. |
| `merchantAccount` | `string` | Required | Your merchant account. |
| `merchantReference` | `string \| undefined` | Optional | Merchant defined payment reference. |
| `options` | [`CheckoutForwardRequestOptions2 \| undefined`](../../doc/models/checkout-forward-request-options-2.md) | Optional | The customizations that can be applied when making a forward request. |
| `paymentMethod` | [`CheckoutForwardRequestCard2 \| undefined`](../../doc/models/checkout-forward-request-card-2.md) | Optional | The card details. |
| `request` | [`CheckoutOutgoingForwardRequest2`](../../doc/models/checkout-outgoing-forward-request-2.md) | Required | The [details of the request](https://docs.adyen.com/online-payments/tokenization/forward-payment-details#request-to-adyen-card) that you want to forward to the third-party. |
| `shopperReference` | `string` | Required | Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br><br>> Your reference must not include personally identifiable information (PII) such as name or email address. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | The unique identifier of the token that you want to forward to the third party. This is the `storedPaymentMethodId` you received in the webhook after you created the token. |

## Example

```ts
import { CheckoutForwardRequest, HttpMethodEnum } from 'adyen';

const checkoutForwardRequest: CheckoutForwardRequest = {
  baseUrl: 'baseUrl2',
  merchantAccount: 'merchantAccount6',
  request: {
    body: 'body2',
    httpMethod: HttpMethodEnum.Post,
    credentials: 'credentials0',
    headers: {
      'key0': 'headers9'
    },
    urlSuffix: 'urlSuffix2',
  },
  shopperReference: 'shopperReference2',
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  merchantReference: 'merchantReference8',
  options: {
    accountUpdate: false,
    dryRun: false,
    networkToken: {
      includeCryptogram: false,
      useNetworkToken: false,
    },
    networkTxReferencePaths: [
      'networkTxReferencePaths7'
    ],
    tokenize: false,
  },
  paymentMethod: {
    cvc: 'cvc6',
    encryptedCardNumber: 'encryptedCardNumber0',
    encryptedExpiryMonth: 'encryptedExpiryMonth2',
    encryptedExpiryYear: 'encryptedExpiryYear2',
    encryptedSecurityCode: 'encryptedSecurityCode2',
  },
  storedPaymentMethodId: 'storedPaymentMethodId8',
};
```

