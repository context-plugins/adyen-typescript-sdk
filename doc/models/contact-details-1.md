
# Contact Details 1

Contact details of the account holder.

*This model accepts additional fields of type unknown.*

## Structure

`ContactDetails1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`Address112`](../../doc/models/address-112.md) | Required | - |
| `email` | `string` | Required | The email address of the account holder. |
| `phone` | [`Phone`](../../doc/models/phone.md) | Required | - |
| `webAddress` | `string \| undefined` | Optional | The URL of the account holder's website. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ContactDetails1, Type4 } from 'adyen';

const contactDetails1: ContactDetails1 = {
  address: {
    city: 'city6',
    country: 'country0',
    houseNumberOrName: 'houseNumberOrName4',
    postalCode: 'postalCode8',
    street: 'street6',
    stateOrProvince: 'stateOrProvince4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  email: 'email4',
  phone: {
    number: 'number8',
    type: Type4.Landline,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  webAddress: 'webAddress8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

