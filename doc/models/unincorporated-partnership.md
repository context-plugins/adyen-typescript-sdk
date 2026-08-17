
# Unincorporated Partnership

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
| `principalPlaceOfBusiness` | [`Address41 \| undefined`](../../doc/models/address-41.md) | Optional | The business address. Required if the principal place of business is different from the `registeredAddress`. |
| `registeredAddress` | [`Address51`](../../doc/models/address-51.md) | Required | The address registered at the registrar, such as the Chamber of Commerce. |
| `registrationNumber` | `string \| undefined` | Optional | The registration number. |
| `taxInformation` | [`TaxInformation[] \| undefined`](../../doc/models/tax-information.md) | Optional | The tax information of the entity. |
| `type` | [`Type191Enum \| undefined`](../../doc/models/type-191-enum.md) | Optional, Read-only | Type of Partnership.<br><br>Possible values:<br><br>* **limitedPartnership**<br>* **generalPartnership**<br>* **familyPartnership**<br>* **commercialPartnership**<br>* **publicPartnership**<br>* **otherPartnership**<br>* **gbr**<br>* **gmbh**<br>* **kgaa**<br>* **cv**<br>* **vof**<br>* **maatschap**<br>* **privateFundLimitedPartnership**<br>* **businessTrustEntity**<br>* **businessPartnership**<br>* **limitedLiabilityPartnership**<br>* **eg**<br>* **cooperative**<br>* **vos**<br>* **comunidadDeBienes**<br>* **herenciaYacente**<br>* **comunidadDePropietarios**<br>* **sep**<br>* **sca**<br>* **bt**<br>* **kkt**<br>* **scs**<br>* **snc** |
| `vatAbsenceReason` | [`VatAbsenceReason1Enum \| undefined`](../../doc/models/vat-absence-reason-1-enum.md) | Optional | The reason for not providing a VAT number.<br><br>Possible values: **industryExemption**, **belowTaxThreshold**. |
| `vatNumber` | `string \| undefined` | Optional | The VAT number. |

## Example

```ts
import { UnincorporatedPartnership } from 'adyen';

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
  },
};
```

