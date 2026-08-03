
# Payment Completion Details 1

Use this collection to submit the details that were returned as a result of the `/payments` call.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentCompletionDetails1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `md` | `string \| undefined` | Optional | A payment session identifier returned by the card issuer.<br><br>**Constraints**: *Maximum Length*: `20000` |
| `paReq` | `string \| undefined` | Optional | (3D) Payment Authentication Request data for the card issuer.<br><br>**Constraints**: *Maximum Length*: `20000` |
| `paRes` | `string \| undefined` | Optional | (3D) Payment Authentication Response data by the card issuer.<br><br>**Constraints**: *Maximum Length*: `20000` |
| `authorizationToken` | `string \| undefined` | Optional | - |
| `billingToken` | `string \| undefined` | Optional | PayPal-generated token for recurring payments. |
| `cupsecureplusSmscode` | `string \| undefined` | Optional | The SMS verification code collected from the shopper. |
| `facilitatorAccessToken` | `string \| undefined` | Optional | PayPal-generated third party access token. |
| `oneTimePasscode` | `string \| undefined` | Optional | A random number sent to the mobile phone number of the shopper to verify the payment. |
| `orderId` | `string \| undefined` | Optional | PayPal-assigned ID for the order. |
| `payerId` | `string \| undefined` | Optional | PayPal-assigned ID for the payer (shopper). |
| `payload` | `string \| undefined` | Optional | Payload appended to the `returnURL` as a result of the redirect.<br><br>**Constraints**: *Maximum Length*: `20000` |
| `paymentId` | `string \| undefined` | Optional | PayPal-generated ID for the payment. |
| `paymentStatus` | `string \| undefined` | Optional | Value passed from the WeChat MiniProgram `wx.requestPayment` **complete** callback. Possible values: any value starting with `requestPayment:`. |
| `redirectResult` | `string \| undefined` | Optional | The result of the redirect as appended to the `returnURL`.<br><br>**Constraints**: *Maximum Length*: `20000` |
| `resultCode` | `string \| undefined` | Optional | Value you received from the WeChat Pay SDK. |
| `returnUrlQueryString` | `string \| undefined` | Optional | The query string as appended to the `returnURL` when using direct issuer links .<br><br>**Constraints**: *Maximum Length*: `20000` |
| `threeDsResult` | `string \| undefined` | Optional | Base64-encoded string returned by the Component after the challenge flow. It contains the following parameters: `transStatus`, `authorisationToken`.<br><br>**Constraints**: *Maximum Length*: `50000` |
| `threeds2ChallengeResult` | `string \| undefined` | Optional | Base64-encoded string returned by the Component after the challenge flow. It contains the following parameter: `transStatus`.<br><br>**Constraints**: *Maximum Length*: `50000` |
| `threeds2Fingerprint` | `string \| undefined` | Optional | Base64-encoded string returned by the Component after the challenge flow. It contains the following parameter: `threeDSCompInd`.<br><br>**Constraints**: *Maximum Length*: `100000` |
| `vaultToken` | `string \| undefined` | Optional | PayPalv2-generated token for recurring payments. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentCompletionDetails1 } from 'adyenlib';

const paymentCompletionDetails1: PaymentCompletionDetails1 = {
  md: 'MD0',
  paReq: 'PaReq6',
  paRes: 'PaRes6',
  authorizationToken: 'authorization_token0',
  billingToken: 'billingToken8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

