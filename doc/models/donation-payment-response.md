
# Donation Payment Response

*This model accepts additional fields of type unknown.*

## Structure

`DonationPaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount16 \| undefined`](../../doc/models/amount-16.md) | Optional | - |
| `donationAccount` | `string \| undefined` | Optional | The Adyen account name of your charity. We will provide you with this account name once your chosen charity has been [onboarded](https://docs.adyen.com/online-payments/donations#onboarding). |
| `id` | `string \| undefined` | Optional | Your unique resource identifier. |
| `merchantAccount` | `string \| undefined` | Optional | The merchant account identifier, with which you want to process the transaction. |
| `payment` | [`PaymentResponse \| undefined`](../../doc/models/payment-response.md) | Optional | - |
| `reference` | `string \| undefined` | Optional | The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, separate them with hyphens ("-"). Maximum length: 80 characters. |
| `status` | [`Status12 \| undefined`](../../doc/models/status-12.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DonationPaymentResponse, Type493 } from 'adyenlib';

const donationPaymentResponse: DonationPaymentResponse = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  donationAccount: 'donationAccount2',
  id: 'id8',
  merchantAccount: 'merchantAccount0',
  payment: {
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
      'key0': 'additionalData6'
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
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

