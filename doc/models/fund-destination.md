
# Fund Destination

## Structure

`FundDestination`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `iBAN` | `string \| undefined` | Optional | Bank Account Number of the recipient |
| `additionalData` | `Record<string, string> \| undefined` | Optional | a map of name/value pairs for passing in additional/industry-specific data |
| `billingAddress` | [`Address \| undefined`](../../doc/models/address.md) | Optional | The address where to send the invoice. |
| `card` | [`Card1 \| undefined`](../../doc/models/card-1.md) | Optional | Credit card data.<br><br>Optional if `shopperReference` and `selectedRecurringDetailReference` are provided. |
| `selectedRecurringDetailReference` | `string \| undefined` | Optional | The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail. |
| `shopperEmail` | `string \| undefined` | Optional | the email address of the person |
| `shopperName` | [`Name \| undefined`](../../doc/models/name.md) | Optional | the name of the person |
| `shopperReference` | `string \| undefined` | Optional | Required for recurring payments.<br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br><br>> Your reference must not include personally identifiable information (PII) such as name or email address. |
| `subMerchant` | [`SubMerchant \| undefined`](../../doc/models/sub-merchant.md) | Optional | Required for Back-to-Back/ purchase driven load in Wallet transactions.<br>Contains the final merchant who will be receiving the money, also known as subMerchant, information. |
| `telephoneNumber` | `string \| undefined` | Optional | the telephone number of the person |
| `walletPurpose` | `string \| undefined` | Optional | The purpose of a digital wallet transaction. |

## Example

```ts
import { FundDestination } from 'adyen';

const fundDestination: FundDestination = {
  iBAN: 'IBAN2',
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
  },
  card: {
    cvc: 'cvc0',
    expiryMonth: 'expiryMonth0',
    expiryYear: 'expiryYear0',
    holderName: 'holderName2',
    issueNumber: 'issueNumber8',
  },
  selectedRecurringDetailReference: 'selectedRecurringDetailReference2',
};
```

