
# Payout Method

*This model accepts additional fields of type unknown.*

## Structure

`PayoutMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The [`merchantAccount`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_merchantAccount) you used in the `/payments` request when you [saved the account holder's card details](https://docs.adyen.com/classic-platforms/payouts/manual-payout/payout-to-cards#check-and-store). |
| `payoutMethodCode` | `string \| undefined` | Optional | Adyen-generated unique alphanumeric identifier (UUID) for the payout method, returned in the response when you create a payout method. Required when updating an existing payout method in an `/updateAccountHolder` request. |
| `payoutMethodReference` | `string \| undefined` | Optional | Your reference for the payout method. |
| `recurringDetailReference` | `string` | Required | The [`recurringDetailReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_additionalData-ResponseAdditionalDataCommon-recurring-recurringDetailReference)  returned in the `/payments` response when you [saved the account holder's card details](https://docs.adyen.com/classic-platforms/payouts/manual-payout/payout-to-cards#check-and-store). |
| `shopperReference` | `string` | Required | The [`shopperReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_shopperReference) you sent in the `/payments` request when you [saved the account holder's card details](https://docs.adyen.com/classic-platforms/payouts/manual-payout/payout-to-cards#check-and-store). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayoutMethod } from 'adyenlib';

const payoutMethod: PayoutMethod = {
  merchantAccount: 'merchantAccount4',
  recurringDetailReference: 'recurringDetailReference2',
  shopperReference: 'shopperReference0',
  payoutMethodCode: 'payoutMethodCode2',
  payoutMethodReference: 'payoutMethodReference2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

