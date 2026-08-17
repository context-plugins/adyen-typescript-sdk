
# Fund Source 11

The person or entity funding the money.

## Structure

`FundSource11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | A map of name-value pairs for passing additional or industry-specific data. |
| `billingAddress` | [`Address \| undefined`](../../doc/models/address.md) | Optional | The address where to send the invoice. |
| `card` | [`Card \| undefined`](../../doc/models/card.md) | Optional | Credit card data.<br><br>Optional if `shopperReference` and `selectedRecurringDetailReference` are provided. |
| `shopperEmail` | `string \| undefined` | Optional | Email address of the person. |
| `shopperName` | [`Name \| undefined`](../../doc/models/name.md) | Optional | Name of the person. |
| `telephoneNumber` | `string \| undefined` | Optional | Phone number of the person |

## Example

```ts
import { FundSource11 } from 'adyen';

const fundSource11: FundSource11 = {
  additionalData: {
    'key0': 'additionalData0',
    'key1': 'additionalData1',
    'key2': 'additionalData2'
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
  shopperEmail: 'shopperEmail6',
  shopperName: {
    firstName: 'firstName2',
    lastName: 'lastName6',
  },
};
```

