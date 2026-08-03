
# Fund Recipient

*This model accepts additional fields of type unknown.*

## Structure

`FundRecipient`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `iban` | `string \| undefined` | Optional | The IBAN of the bank account where the funds are being transferred to. |
| `billingAddress` | [`BillingAddress7 \| undefined`](../../doc/models/billing-address-7.md) | Optional | - |
| `paymentMethod` | [`CardDetails \| undefined`](../../doc/models/card-details.md) | Optional | - |
| `shopperEmail` | `string \| undefined` | Optional | The email address of the shopper. |
| `shopperName` | [`ShopperName \| undefined`](../../doc/models/shopper-name.md) | Optional | - |
| `shopperReference` | `string \| undefined` | Optional | Required for recurring payments.<br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br><br>> Your reference must not include personally identifiable information (PII) such as name or email address.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `256` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `subMerchant` | [`SubMerchant1 \| undefined`](../../doc/models/sub-merchant-1.md) | Optional | - |
| `telephoneNumber` | `string \| undefined` | Optional | The telephone number of the shopper. |
| `walletIdentifier` | `string \| undefined` | Optional | The unique identifier for the wallet the funds are being transferred to. You can use the shopper reference or any other identifier. |
| `walletOwnerTaxId` | `string \| undefined` | Optional | The tax identifier of the person receiving the funds. |
| `walletPurpose` | [`WalletPurpose \| undefined`](../../doc/models/wallet-purpose.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FundRecipient } from 'adyenlib';

const fundRecipient: FundRecipient = {
  iban: 'IBAN2',
  billingAddress: {
    city: 'city8',
    country: 'country6',
    houseNumberOrName: 'houseNumberOrName0',
    postalCode: 'postalCode6',
    street: 'street2',
    stateOrProvince: 'stateOrProvince0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  paymentMethod: {
    billingSequenceNumber: 'billingSequenceNumber2',
    brand: 'brand6',
    checkoutAttemptId: 'checkoutAttemptId8',
    cupsecureplusSmscode: 'cupsecureplus.smscode0',
    cvc: 'cvc6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  shopperEmail: 'shopperEmail8',
  shopperName: {
    firstName: 'firstName2',
    lastName: 'lastName6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

