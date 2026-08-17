
# Individual

## Structure

`Individual`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `birthData` | [`BirthData1 \| undefined`](../../doc/models/birth-data-1.md) | Optional | The individual's birth information. |
| `email` | `string \| undefined` | Optional | The email address of the legal entity. |
| `identificationData` | [`IdentificationData1 \| undefined`](../../doc/models/identification-data-1.md) | Optional | Information about the individual's identification document. |
| `name` | [`Name23`](../../doc/models/name-23.md) | Required | The individual's name. |
| `nationality` | `string \| undefined` | Optional | The individual's nationality. |
| `phone` | [`PhoneNumber2 \| undefined`](../../doc/models/phone-number-2.md) | Optional | The phone number of the legal entity. |
| `residentialAddress` | [`Address13`](../../doc/models/address-13.md) | Required | The residential address of the individual. |
| `support` | [`Support1 \| undefined`](../../doc/models/support-1.md) | Optional | Support information for the legal entity. Required if you have a platform setup. |
| `taxInformation` | [`TaxInformation[] \| undefined`](../../doc/models/tax-information.md) | Optional | The tax information of the individual. |
| `webData` | [`WebData1 \| undefined`](../../doc/models/web-data-1.md) | Optional | The website and app URL of the legal entity. |

## Example

```ts
import { Individual, Type132Enum } from 'adyen';

const individual: Individual = {
  name: {
    firstName: 'firstName4',
    lastName: 'lastName4',
    infix: 'infix4',
  },
  residentialAddress: {
    country: 'country6',
    city: 'city2',
    postalCode: 'postalCode4',
    stateOrProvince: 'stateOrProvince0',
    street: 'street2',
    street2: 'street28',
  },
  birthData: {
    dateOfBirth: 'dateOfBirth8',
  },
  email: 'email0',
  identificationData: {
    type: Type132Enum.NationalIdNumber,
    cardNumber: 'cardNumber6',
    expiryDate: 'expiryDate8',
    issuerCountry: 'issuerCountry6',
    issuerState: 'issuerState6',
    nationalIdExempt: false,
  },
  nationality: 'nationality4',
  phone: {
    number: 'number8',
    type: 'type0',
  },
};
```

