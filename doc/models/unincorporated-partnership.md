
# Unincorporated Partnership

*This model accepts additional fields of type unknown.*

## Structure

`UnincorporatedPartnership`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `countryOfGoverningLaw` | `string` | Required | The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the governing country. |
| `dateOfIncorporation` | `string \| undefined` | Optional | The date when the legal arrangement was incorporated in YYYY-MM-DD format. |
| `description` | `string \| undefined` | Optional | Short description about the Legal Arrangement. |
| `doingBusinessAs` | `string \| undefined` | Optional | The registered name, if different from the `name`. |
| `doingBusinessAsAbsent` | `boolean \| null \| undefined` | Optional | Set this to **true** if the legal arrangement does not have a `Doing business as` name. |
| `name` | `string` | Required | The legal name. |
| `principalPlaceOfBusiness` | [`Address1 \| undefined`](../../doc/models/address-1.md) | Optional | - |
| `registeredAddress` | [`Address1`](../../doc/models/address-1.md) | Required | - |
| `registrationNumber` | `string \| undefined` | Optional | The registration number. |
| `taxInformation` | [`TaxInformation[] \| undefined`](../../doc/models/tax-information.md) | Optional | The tax information of the entity. |
| `type` | [`Type191 \| undefined`](../../doc/models/type-191.md) | Optional, Read-only | - |
| `vatAbsenceReason` | [`VatAbsenceReason1 \| undefined`](../../doc/models/vat-absence-reason-1.md) | Optional | - |
| `vatNumber` | `string \| undefined` | Optional | The VAT number. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UnincorporatedPartnership } from 'adyenlib';

const unincorporatedPartnership: UnincorporatedPartnership = {
  countryOfGoverningLaw: 'countryOfGoverningLaw6',
  name: 'name8',
  registeredAddress: {
    country: 'country4',
    city: 'city0',
    postalCode: 'postalCode8',
    stateOrProvince: 'stateOrProvince8',
    street: 'street0',
    street2: 'street24',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  dateOfIncorporation: 'dateOfIncorporation8',
  description: 'description8',
  doingBusinessAs: 'doingBusinessAs6',
  doingBusinessAsAbsent: false,
  principalPlaceOfBusiness: {
    country: 'country6',
    city: 'city8',
    postalCode: 'postalCode6',
    stateOrProvince: 'stateOrProvince0',
    street: 'street2',
    street2: 'street22',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

