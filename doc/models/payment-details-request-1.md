
# Payment Details Request 1

*This model accepts additional fields of type unknown.*

## Structure

`PaymentDetailsRequest1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticationData` | [`DetailsRequestAuthenticationData \| undefined`](../../doc/models/details-request-authentication-data.md) | Optional | - |
| `details` | [`PaymentCompletionDetails`](../../doc/models/payment-completion-details.md) | Required | - |
| `paymentData` | `string \| undefined` | Optional | Encoded payment data. For [authorizing a payment after using 3D Secure 2 Authentication-only](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only/#authorise-the-payment-with-adyen):<br><br>If you received `resultCode`: **AuthenticationNotRequired** in the `/payments` response, use the `threeDSPaymentData` from the same response.<br><br>If you received `resultCode`: **AuthenticationFinished** in the `/payments` response, use the `action.paymentData` from the same response.<br><br>**Constraints**: *Maximum Length*: `200000` |
| `threeDsAuthenticationOnly` | `boolean \| undefined` | Optional | Change the `authenticationOnly` indicator originally set in the `/payments` request. Only needs to be set if you want to modify the value set previously. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentDetailsRequest1 } from 'adyenlib';

const paymentDetailsRequest1: PaymentDetailsRequest1 = {
  details: {
    md: 'MD4',
    paReq: 'PaReq0',
    paRes: 'PaRes0',
    authorizationToken: 'authorization_token4',
    billingToken: 'billingToken2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  authenticationData: {
    authenticationOnly: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  paymentData: 'paymentData0',
  threeDsAuthenticationOnly: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

