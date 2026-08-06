
# Fund Destination

*This model accepts additional fields of type unknown.*

## Structure

`FundDestination`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `iban` | `string \| undefined` | Optional | Bank Account Number of the recipient |
| `additionalData` | `Record<string, string> \| undefined` | Optional | a map of name/value pairs for passing in additional/industry-specific data |
| `billingAddress` | [`BillingAddress7 \| undefined`](../../doc/models/billing-address-7.md) | Optional | - |
| `card` | [`Card6 \| undefined`](../../doc/models/card-6.md) | Optional | - |
| `selectedRecurringDetailReference` | `string \| undefined` | Optional | The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail. |
| `shopperEmail` | `string \| undefined` | Optional | the email address of the person |
| `shopperName` | [`ShopperName \| undefined`](../../doc/models/shopper-name.md) | Optional | - |
| `shopperReference` | `string \| undefined` | Optional | Required for recurring payments.<br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br><br>> Your reference must not include personally identifiable information (PII) such as name or email address. |
| `subMerchant` | [`SubMerchant1 \| undefined`](../../doc/models/sub-merchant-1.md) | Optional | - |
| `telephoneNumber` | `string \| undefined` | Optional | the telephone number of the person |
| `walletPurpose` | `string \| undefined` | Optional | The purpose of a digital wallet transaction. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FundDestination } from 'adyen';

const fundDestination: FundDestination = {
  iban: 'IBAN2',
  additionalData: {
    'key0': 'additionalData8',
    'key1': 'additionalData9',
    'key2': 'additionalData0'
  },
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
  card: {
    cvc: 'cvc0',
    expiryMonth: 'expiryMonth0',
    expiryYear: 'expiryYear0',
    holderName: 'holderName2',
    issueNumber: 'issueNumber8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  selectedRecurringDetailReference: 'selectedRecurringDetailReference2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

