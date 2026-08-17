
# Contact Details

## Structure

`ContactDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`Address`](../../doc/models/address.md) | Required | The address of the account holder. |
| `email` | `string` | Required | The email address of the account holder. |
| `phone` | [`Phone31`](../../doc/models/phone-31.md) | Required | The phone number of the account holder. |
| `webAddress` | `string \| undefined` | Optional | The URL of the account holder's website. |

## Example

```ts
import { ContactDetails, Type410Enum } from 'adyen';

const contactDetails: ContactDetails = {
  address: {
    city: 'city6',
    country: 'country0',
    houseNumberOrName: 'houseNumberOrName4',
    postalCode: 'postalCode8',
    street: 'street6',
    stateOrProvince: 'stateOrProvince4',
  },
  email: 'email6',
  phone: {
    number: 'number8',
    type: Type410Enum.Landline,
  },
  webAddress: 'webAddress0',
};
```

