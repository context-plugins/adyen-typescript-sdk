
# Donation Payment Response

## Structure

`DonationPaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount26 \| undefined`](../../doc/models/amount-26.md) | Optional | Authorised amount in the transaction. |
| `donationAccount` | `string \| undefined` | Optional | The Adyen account name of your charity. We will provide you with this account name once your chosen charity has been [onboarded](https://docs.adyen.com/online-payments/donations#onboarding). |
| `id` | `string \| undefined` | Optional | Your unique resource identifier. |
| `merchantAccount` | `string \| undefined` | Optional | The merchant account identifier, with which you want to process the transaction. |
| `payment` | [`PaymentResponse9 \| undefined`](../../doc/models/payment-response-9.md) | Optional | Action to be taken for completing the payment. |
| `reference` | `string \| undefined` | Optional | The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, separate them with hyphens ("-"). Maximum length: 80 characters. |
| `status` | [`Status1Enum \| undefined`](../../doc/models/status-1-enum.md) | Optional | The status of the donation transaction.<br><br>Possible values:<br><br>* **completed**<br>* **pending**<br>* **refused** |

## Example

```ts
import { DonationPaymentResponse } from 'adyen';

const donationPaymentResponse: DonationPaymentResponse = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  donationAccount: 'donationAccount2',
  id: 'id8',
  merchantAccount: 'merchantAccount0',
  payment: {
    action: {
      type: 'type4',
      paymentData: 'paymentData8',
      paymentMethodType: 'paymentMethodType8',
      url: 'url0',
    },
    additionalData: {
      'key0': 'additionalData6'
    },
    amount: {
      currency: 'currency2',
      value: BigInt(110),
    },
    donationToken: 'donationToken8',
    fraudResult: {
      accountScore: 232,
      results: [
        {
          accountScore: 102,
          checkId: 246,
          name: 'name6',
        },
        {
          accountScore: 102,
          checkId: 246,
          name: 'name6',
        }
      ],
    },
  },
};
```

