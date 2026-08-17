
# Trust

## Structure

`Trust`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `countryOfGoverningLaw` | `string` | Required | The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the governing country. |
| `dateOfIncorporation` | `string \| undefined` | Optional | The date when the legal arrangement was incorporated in YYYY-MM-DD format. |
| `description` | `string \| undefined` | Optional | A short description about the trust. Only applicable for charitable trusts in New Zealand. |
| `doingBusinessAs` | `string \| undefined` | Optional | The registered name, if different from the `name`. |
| `doingBusinessAsAbsent` | `boolean \| null \| undefined` | Optional | Set this to **true** if the legal arrangement does not have a `Doing business as` name. |
| `name` | `string` | Required | The legal name. |
| `principalPlaceOfBusiness` | [`Address41 \| undefined`](../../doc/models/address-41.md) | Optional | The business address. Required if the principal place of business is different from the `registeredAddress`. |
| `registeredAddress` | [`Address51`](../../doc/models/address-51.md) | Required | The address registered at the registrar, such as the Chamber of Commerce. |
| `registrationNumber` | `string \| undefined` | Optional | The registration number. |
| `taxInformation` | [`TaxInformation[] \| undefined`](../../doc/models/tax-information.md) | Optional | The tax information of the entity. |
| `type` | [`Type171Enum`](../../doc/models/type-171-enum.md) | Required | Type of trust.<br><br>See possible values for trusts in [Australia](https://docs.adyen.com/platforms/verification-requirements/?tab=trust_3_4#trust-types-in-australia) and [New Zealand](https://docs.adyen.com/platforms/verification-requirements/?tab=trust_3_4#trust-types-in-new-zealand). |
| `undefinedBeneficiaryInfo` | [`UndefinedBeneficiary[] \| undefined`](../../doc/models/undefined-beneficiary.md) | Optional | The undefined beneficiary information of the entity. |
| `vatAbsenceReason` | [`VatAbsenceReason1Enum \| undefined`](../../doc/models/vat-absence-reason-1-enum.md) | Optional | The reason for not providing a VAT number.<br><br>Possible values: **industryExemption**, **belowTaxThreshold**. |
| `vatNumber` | `string \| undefined` | Optional | The VAT number. |

## Example

```ts
import { Trust, Type171Enum } from 'adyen';

const trust: Trust = {
  countryOfGoverningLaw: 'countryOfGoverningLaw0',
  name: 'name4',
  registeredAddress: {
    country: 'country4',
    city: 'city0',
    postalCode: 'postalCode8',
    stateOrProvince: 'stateOrProvince8',
    street: 'street0',
    street2: 'street24',
  },
  type: Type171Enum.FixedTrust,
  dateOfIncorporation: 'dateOfIncorporation6',
  description: 'description6',
  doingBusinessAs: 'doingBusinessAs2',
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

