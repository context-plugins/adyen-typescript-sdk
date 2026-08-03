
# Checkout Forward Request

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutForwardRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount16 \| undefined`](../../doc/models/amount-16.md) | Optional | - |
| `baseUrl` | `string` | Required | The base URL of the third party API, where Adyen will send the request to forward the payment details. |
| `merchantAccount` | `string` | Required | Your merchant account. |
| `merchantReference` | `string \| undefined` | Optional | Merchant defined payment reference. |
| `options` | [`CheckoutForwardRequestOptions \| undefined`](../../doc/models/checkout-forward-request-options.md) | Optional | - |
| `paymentMethod` | [`CheckoutForwardRequestCard \| undefined`](../../doc/models/checkout-forward-request-card.md) | Optional | - |
| `request` | [`CheckoutOutgoingForwardRequest`](../../doc/models/checkout-outgoing-forward-request.md) | Required | - |
| `shopperReference` | `string` | Required | Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br><br>> Your reference must not include personally identifiable information (PII) such as name or email address. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | The unique identifier of the token that you want to forward to the third party. This is the `storedPaymentMethodId` you received in the webhook after you created the token. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckoutForwardRequest, HttpMethod } from 'adyenlib';

const checkoutForwardRequest: CheckoutForwardRequest = {
  baseUrl: 'baseUrl2',
  merchantAccount: 'merchantAccount6',
  request: {
    body: 'body2',
    httpMethod: HttpMethod.Post,
    credentials: 'credentials0',
    headers: {
      'key0': 'headers9'
    },
    urlSuffix: 'urlSuffix2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  shopperReference: 'shopperReference2',
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  merchantReference: 'merchantReference8',
  options: {
    accountUpdate: false,
    dryRun: false,
    networkToken: {
      includeCryptogram: false,
      useNetworkToken: false,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    networkTxReferencePaths: [
      'networkTxReferencePaths7'
    ],
    tokenize: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  paymentMethod: {
    cvc: 'cvc6',
    encryptedCardNumber: 'encryptedCardNumber0',
    encryptedExpiryMonth: 'encryptedExpiryMonth2',
    encryptedExpiryYear: 'encryptedExpiryYear2',
    encryptedSecurityCode: 'encryptedSecurityCode2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  storedPaymentMethodId: 'storedPaymentMethodId8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

