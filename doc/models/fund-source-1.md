
# Fund Source 1

The person or entity funding the money.

*This model accepts additional fields of type unknown.*

## Structure

`FundSource1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | A map of name-value pairs for passing additional or industry-specific data. |
| `billingAddress` | [`BillingAddress7 \| undefined`](../../doc/models/billing-address-7.md) | Optional | - |
| `card` | [`Card6 \| undefined`](../../doc/models/card-6.md) | Optional | - |
| `shopperEmail` | `string \| undefined` | Optional | Email address of the person. |
| `shopperName` | [`ShopperName \| undefined`](../../doc/models/shopper-name.md) | Optional | - |
| `telephoneNumber` | `string \| undefined` | Optional | Phone number of the person |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FundSource1 } from 'adyen';

const fundSource1: FundSource1 = {
  additionalData: {
    'key0': 'additionalData4',
    'key1': 'additionalData5'
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

