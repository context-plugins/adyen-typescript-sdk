
# Payment Details Response 1

*This model accepts additional fields of type unknown.*

## Structure

`PaymentDetailsResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `action` | [`CheckoutThreeDs2Action \| undefined`](../../doc/models/checkout-three-ds-2-action.md) | Optional | Action to be taken for completing the payment. When returned, only the 3D Secure action is needed in most cases. |
| `additionalData` | `Record<string, string> \| undefined` | Optional | Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**. |
| `amount` | [`Amount16 \| undefined`](../../doc/models/amount-16.md) | Optional | - |
| `donationToken` | `string \| undefined` | Optional | Donation Token containing payment details for Adyen Giving. |
| `fraudResult` | [`FraudResult \| undefined`](../../doc/models/fraud-result.md) | Optional | - |
| `merchantReference` | `string \| undefined` | Optional | The reference used during the /payments request. |
| `order` | [`CheckoutOrderResponse \| undefined`](../../doc/models/checkout-order-response.md) | Optional | - |
| `paymentMethod` | [`PaymentResponse8 \| undefined`](../../doc/models/payment-response-8.md) | Optional | - |
| `paymentValidations` | [`PaymentResponse7 \| undefined`](../../doc/models/payment-response-7.md) | Optional | - |
| `pspReference` | `string \| undefined` | Optional | Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request. |
| `refusalReason` | `string \| undefined` | Optional | If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.<br><br>For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons). |
| `refusalReasonCode` | `string \| undefined` | Optional | Code that specifies the refusal reason. For more information, see [Authorisation refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons). |
| `resultCode` | [`ResultCode1 \| undefined`](../../doc/models/result-code-1.md) | Optional | - |
| `shopperLocale` | `string \| undefined` | Optional | The shopperLocale. |
| `threeDs2ResponseData` | [`ThreeDs2ResponseData \| undefined`](../../doc/models/three-ds-2-response-data.md) | Optional | - |
| `threeDs2Result` | [`ThreeDs2Result2 \| undefined`](../../doc/models/three-ds-2-result-2.md) | Optional | - |
| `threeDsPaymentData` | `string \| undefined` | Optional | When non-empty, contains a value that you must submit to the `/payments/details` endpoint as `paymentData`. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentDetailsResponse1, Type583 } from 'adyenlib';

const paymentDetailsResponse1: PaymentDetailsResponse1 = {
  action: {
    type: Type583.ThreeDs2,
    authorisationToken: 'authorisationToken6',
    paymentData: 'paymentData4',
    paymentMethodType: 'paymentMethodType4',
    subtype: 'subtype4',
    token: 'token6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalData: {
    'key0': 'additionalData6',
    'key1': 'additionalData7',
    'key2': 'additionalData8'
  },
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  donationToken: 'donationToken8',
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

