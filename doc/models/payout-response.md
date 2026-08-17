
# Payout Response

## Structure

`PayoutResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**. |
| `authCode` | `string \| undefined` | Optional | Authorisation code:<br><br>* When the payment is authorised successfully, this field holds the authorisation code for the payment.<br>* When the payment is not authorised, this field is empty. |
| `dccAmount` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | Includes the currency of the conversion and the value of the transaction.<br><br>> This value only applies if you have implemented Dynamic Currency Conversion. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new). |
| `dccSignature` | `string \| undefined` | Optional | Cryptographic signature used to verify `dccQuote`.<br><br>> This value only applies if you have implemented Dynamic Currency Conversion. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new). |
| `fraudResult` | [`FraudResult2 \| undefined`](../../doc/models/fraud-result-2.md) | Optional | The fraud result properties of the payment. |
| `issuerUrl` | `string \| undefined` | Optional | The URL to direct the shopper to.<br><br>> In case of SecurePlus, do not redirect a shopper to this URL. |
| `md` | `string \| undefined` | Optional | The payment session.<br><br>**Constraints**: *Maximum Length*: `20000` |
| `paRequest` | `string \| undefined` | Optional | The 3D request data for the issuer.<br><br>If the value is **CUPSecurePlus-CollectSMSVerificationCode**, collect an SMS code from the shopper and pass it in the `/authorise3D` request. For more information, see [3D Secure](https://docs.adyen.com/classic-integration/3d-secure). |
| `pspReference` | `string \| undefined` | Optional | Adyen's 16-character reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request. |
| `refusalReason` | `string \| undefined` | Optional | If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.<br><br>For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons). |
| `resultCode` | [`ResultCode1Enum \| undefined`](../../doc/models/result-code-1-enum.md) | Optional | The result of the payment. For more information, see [Result codes](https://docs.adyen.com/online-payments/payment-result-codes).<br><br>Possible values:<br><br>* **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure 2. Returned for 3D Secure 2 authentication-only transactions.<br>* **AuthenticationNotRequired** – The transaction does not require 3D Secure authentication. Returned for [standalone authentication-only integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only).<br>* **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state.<br>* **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state.<br>* **ChallengeShopper** – The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions.<br>* **Error** – There was an error when the payment was being processed. The reason is given in the `refusalReason` field. This is a final state.<br>* **IdentifyShopper** – The issuer requires the shopper's device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions.<br>* **PartiallyAuthorised** – The payment has been authorised for a partial amount.<br>  This happens for card payments when the merchant supports Partial Authorisations and the cardholder has insufficient funds.<br>* **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment.<br>* **PresentToShopper** – Indicates that the response contains additional information that you need to present to a shopper, so that they can use it to complete a payment.<br>* **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments.<br>* **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation.<br>* **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state. |

## Example

```ts
import { PayoutResponse } from 'adyen';

const payoutResponse: PayoutResponse = {
  additionalData: {
    'key0': 'additionalData6',
    'key1': 'additionalData7',
    'key2': 'additionalData8'
  },
  authCode: 'authCode0',
  dccAmount: {
    currency: 'currency4',
    value: BigInt(56),
  },
  dccSignature: 'dccSignature8',
  fraudResult: {
    accountScore: 232,
    results: [
      {
        fraudCheckResult: {
          accountScore: 114,
          checkId: 2,
          name: 'name0',
        },
      },
      {
        fraudCheckResult: {
          accountScore: 114,
          checkId: 2,
          name: 'name0',
        },
      }
    ],
  },
};
```

