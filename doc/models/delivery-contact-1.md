
# Delivery Contact 1

The delivery contact (name and address) for physical card delivery.

*This model accepts additional fields of type unknown.*

## Structure

`DeliveryContact1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`Address15`](../../doc/models/address-15.md) | Required | - |
| `company` | `string \| undefined` | Optional | The company name of the contact. |
| `email` | `string \| undefined` | Optional | The email address of the contact. |
| `fullPhoneNumber` | `string \| undefined` | Optional | The full phone number of the contact provided as a single string. It will be handled as a landline phone.<br>**Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344" |
| `name` | [`Name5`](../../doc/models/name-5.md) | Required | - |
| `phoneNumber` | [`PhoneNumber3 \| undefined`](../../doc/models/phone-number-3.md) | Optional | - |
| `webAddress` | `string \| undefined` | Optional | The URL of the contact's website. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeliveryContact1, PhoneType } from 'adyenlib';

const deliveryContact1: DeliveryContact1 = {
  address: {
    country: 'country0',
    city: 'city6',
    line1: 'line18',
    line2: 'line20',
    line3: 'line38',
    postalCode: 'postalCode8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  name: {
    firstName: 'firstName4',
    lastName: 'lastName4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  company: 'company6',
  email: 'email0',
  fullPhoneNumber: 'fullPhoneNumber0',
  phoneNumber: {
    phoneCountryCode: 'phoneCountryCode8',
    phoneNumber: 'phoneNumber0',
    phoneType: PhoneType.Fax,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  webAddress: 'webAddress6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

