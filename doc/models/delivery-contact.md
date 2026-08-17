
# Delivery Contact

## Structure

`DeliveryContact`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`StoreLocation`](../../doc/models/store-location.md) | Required | The address of the contact. |
| `company` | `string \| undefined` | Optional | The company name of the contact. |
| `email` | `string \| undefined` | Optional | The email address of the contact. |
| `fullPhoneNumber` | `string \| undefined` | Optional | The full phone number of the contact provided as a single string. It will be handled as a landline phone.<br>**Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344" |
| `name` | [`Name`](../../doc/models/name.md) | Required | The name of the contact. |
| `phoneNumber` | [`ViasPhoneNumber \| undefined`](../../doc/models/vias-phone-number.md) | Optional | The phone number of the contact. |
| `webAddress` | `string \| undefined` | Optional | The URL of the contact's website. |

## Example

```ts
import { DeliveryContact, PhoneTypeEnum } from 'adyen';

const deliveryContact: DeliveryContact = {
  address: {
    country: 'country0',
    city: 'city6',
    line1: 'line18',
    line2: 'line20',
    line3: 'line38',
    postalCode: 'postalCode8',
  },
  name: {
    firstName: 'firstName4',
    lastName: 'lastName4',
  },
  company: 'company4',
  email: 'email0',
  fullPhoneNumber: 'fullPhoneNumber0',
  phoneNumber: {
    phoneCountryCode: 'phoneCountryCode8',
    phoneNumber: 'phoneNumber0',
    phoneType: PhoneTypeEnum.Fax,
  },
  webAddress: 'webAddress4',
};
```

