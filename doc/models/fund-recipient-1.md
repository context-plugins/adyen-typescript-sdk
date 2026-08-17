
# Fund Recipient 1

the person or entity receiving the money

## Structure

`FundRecipient1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `iBAN` | `string \| undefined` | Optional | The IBAN of the bank account where the funds are being transferred to. |
| `billingAddress` | [`Address3 \| undefined`](../../doc/models/address-3.md) | Optional | The address where to send the invoice. |
| `paymentMethod` | [`CardDetails1 \| undefined`](../../doc/models/card-details-1.md) | Optional | The payment method used by the shopper. |
| `shopperEmail` | `string \| undefined` | Optional | The email address of the shopper. |
| `shopperName` | [`Name2 \| undefined`](../../doc/models/name-2.md) | Optional | The name of the shopper. |
| `shopperReference` | `string \| undefined` | Optional | Required for recurring payments.<br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br><br>> Your reference must not include personally identifiable information (PII) such as name or email address.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `256` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `subMerchant` | [`SubMerchant2 \| undefined`](../../doc/models/sub-merchant-2.md) | Optional | Required for back-to-back/purchase-driven-load transactions, where the funds are taken from the shopper's stored card when the wallet balance is insufficient.<br>The final merchant who will receive the money, also known as a [sub-merchant](https://docs.adyen.com/get-started-with-adyen/payment-glossary/#submerchant). |
| `telephoneNumber` | `string \| undefined` | Optional | The telephone number of the shopper. |
| `walletIdentifier` | `string \| undefined` | Optional | The unique identifier for the wallet the funds are being transferred to. You can use the shopper reference or any other identifier. |
| `walletOwnerTaxId` | `string \| undefined` | Optional | The tax identifier of the person receiving the funds. |
| `walletPurpose` | [`WalletPurposeEnum \| undefined`](../../doc/models/wallet-purpose-enum.md) | Optional | The purpose of a digital wallet transaction. |

## Example

```ts
import { FundRecipient1 } from 'adyen';

const fundRecipient1: FundRecipient1 = {
  iBAN: 'IBAN2',
  billingAddress: {
    city: 'city8',
    country: 'country6',
    houseNumberOrName: 'houseNumberOrName0',
    postalCode: 'postalCode6',
    street: 'street2',
    stateOrProvince: 'stateOrProvince0',
  },
  paymentMethod: {
    billingSequenceNumber: 'billingSequenceNumber2',
    brand: 'brand6',
    checkoutAttemptId: 'checkoutAttemptId8',
    cupsecureplusSmscode: 'cupsecureplus.smscode0',
    cvc: 'cvc6',
  },
  shopperEmail: 'shopperEmail2',
  shopperName: {
    firstName: 'firstName2',
    lastName: 'lastName6',
  },
};
```

