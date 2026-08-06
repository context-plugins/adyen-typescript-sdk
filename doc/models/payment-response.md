
# Payment Response

*This model accepts additional fields of type unknown.*

## Structure

`PaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `action` | [`PaymentResponseAction \| undefined`](../../doc/models/containers/payment-response-action.md) | Optional | This is a container for one-of cases. |
| `additionalData` | `Record<string, string> \| undefined` | Optional | Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**. |
| `amount` | [`Amount16 \| undefined`](../../doc/models/amount-16.md) | Optional | - |
| `donationToken` | `string \| undefined` | Optional | Donation Token containing payment details for Adyen Giving. |
| `fraudResult` | [`FraudResult \| undefined`](../../doc/models/fraud-result.md) | Optional | - |
| `merchantReference` | `string \| undefined` | Optional | The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters. |
| `order` | [`CheckoutOrderResponse \| undefined`](../../doc/models/checkout-order-response.md) | Optional | - |
| `paymentMethod` | [`PaymentResponse8 \| undefined`](../../doc/models/payment-response-8.md) | Optional | - |
| `paymentValidations` | [`PaymentResponse7 \| undefined`](../../doc/models/payment-response-7.md) | Optional | - |
| `pspReference` | `string \| undefined` | Optional | Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.<br><br>> For payment methods that require a redirect or additional action, you will get this value in the `/payments/details` response. |
| `refusalReason` | `string \| undefined` | Optional | If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.<br><br>For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons). |
| `refusalReasonCode` | `string \| undefined` | Optional | Code that specifies the refusal reason. For more information, see [Authorisation refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons). |
| `resultCode` | [`ResultCode1 \| undefined`](../../doc/models/result-code-1.md) | Optional | - |
| `threeDs2ResponseData` | [`ThreeDs2ResponseData \| undefined`](../../doc/models/three-ds-2-response-data.md) | Optional | - |
| `threeDs2Result` | [`ThreeDs2Result2 \| undefined`](../../doc/models/three-ds-2-result-2.md) | Optional | - |
| `threeDsPaymentData` | `string \| undefined` | Optional | When non-empty, contains a value that you must submit to the `/payments/details` endpoint as `paymentData`. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentResponse, Type493 } from 'adyen';

const paymentResponse: PaymentResponse = {
  action: {
    type: Type493.Await,
    paymentData: 'paymentData8',
    paymentMethodType: 'paymentMethodType8',
    url: 'url0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalData: {
    'key0': 'additionalData2',
    'key1': 'additionalData3',
    'key2': 'additionalData4'
  },
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  donationToken: 'donationToken0',
  fraudResult: {
    accountScore: 232,
    results: [
      {
        accountScore: 102,
        checkId: 246,
        name: 'name6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        accountScore: 102,
        checkId: 246,
        name: 'name6',
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

