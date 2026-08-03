
# Payment Result

*This model accepts additional fields of type unknown.*

## Structure

`PaymentResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**. |
| `authCode` | `string \| undefined` | Optional | Authorisation code:<br><br>* When the payment is authorised successfully, this field holds the authorisation code for the payment.<br>* When the payment is not authorised, this field is empty. |
| `dccAmount` | [`DccAmount \| undefined`](../../doc/models/dcc-amount.md) | Optional | - |
| `dccSignature` | `string \| undefined` | Optional | Cryptographic signature used to verify `dccQuote`.<br><br>> This value only applies if you have implemented Dynamic Currency Conversion. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new). |
| `fraudResult` | [`FraudResult6 \| undefined`](../../doc/models/fraud-result-6.md) | Optional | - |
| `issuerUrl` | `string \| undefined` | Optional | The URL to direct the shopper to.<br><br>> In case of SecurePlus, do not redirect a shopper to this URL. |
| `md` | `string \| undefined` | Optional | The payment session.<br><br>**Constraints**: *Maximum Length*: `20000` |
| `paRequest` | `string \| undefined` | Optional | The 3D request data for the issuer.<br><br>If the value is **CUPSecurePlus-CollectSMSVerificationCode**, collect an SMS code from the shopper and pass it in the `/authorise3D` request. For more information, see [3D Secure](https://docs.adyen.com/classic-integration/3d-secure). |
| `pspReference` | `string \| undefined` | Optional | Adyen's 16-character reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request. |
| `refusalReason` | `string \| undefined` | Optional | If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.<br><br>For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons). |
| `resultCode` | [`ResultCode1 \| undefined`](../../doc/models/result-code-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentResult } from 'adyenlib';

const paymentResult: PaymentResult = {
  additionalData: {
    'key0': 'additionalData6'
  },
  authCode: 'authCode0',
  dccAmount: {
    currency: 'currency4',
    value: BigInt(56),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  dccSignature: 'dccSignature2',
  fraudResult: {
    accountScore: 232,
    results: [
      {
        fraudCheckResult: {
          accountScore: 114,
          checkId: 2,
          name: 'name0',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        fraudCheckResult: {
          accountScore: 114,
          checkId: 2,
          name: 'name0',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

