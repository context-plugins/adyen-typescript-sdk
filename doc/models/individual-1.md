
# Individual 1

Information about the individual. Required if `type` is **individual**.

*This model accepts additional fields of type unknown.*

## Structure

`Individual1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `birthData` | [`BirthData \| undefined`](../../doc/models/birth-data.md) | Optional | - |
| `email` | `string \| undefined` | Optional | The email address of the legal entity. |
| `identificationData` | [`IdentificationData \| undefined`](../../doc/models/identification-data.md) | Optional | - |
| `name` | [`Name1`](../../doc/models/name-1.md) | Required | - |
| `nationality` | `string \| undefined` | Optional | The individual's nationality. |
| `phone` | [`PhoneNumber \| undefined`](../../doc/models/phone-number.md) | Optional | - |
| `residentialAddress` | [`Address1`](../../doc/models/address-1.md) | Required | - |
| `support` | [`Support \| undefined`](../../doc/models/support.md) | Optional | - |
| `taxInformation` | [`TaxInformation[] \| undefined`](../../doc/models/tax-information.md) | Optional | The tax information of the individual. |
| `webData` | [`WebData \| undefined`](../../doc/models/web-data.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Individual1, Type132 } from 'adyenlib';

const individual1: Individual1 = {
  name: {
    firstName: 'firstName4',
    lastName: 'lastName4',
    infix: 'infix4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  residentialAddress: {
    country: 'country6',
    city: 'city2',
    postalCode: 'postalCode4',
    stateOrProvince: 'stateOrProvince0',
    street: 'street2',
    street2: 'street28',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  birthData: {
    dateOfBirth: 'dateOfBirth8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  email: 'email8',
  identificationData: {
    type: Type132.NationalIdNumber,
    cardNumber: 'cardNumber6',
    expiryDate: 'expiryDate8',
    issuerCountry: 'issuerCountry6',
    issuerState: 'issuerState6',
    nationalIdExempt: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  nationality: 'nationality6',
  phone: {
    number: 'number8',
    phoneCountryCode: 'phoneCountryCode8',
    type: 'type0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

