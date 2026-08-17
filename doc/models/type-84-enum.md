
# Type 84 Enum

Type of document, used when providing an ID number or uploading a document. The possible values depend on the legal entity type.

* For **organization**, the `type` values can be **proofOfAddress**, **registrationDocument**, **vatDocument**, **proofOfOrganizationTaxInfo**, **proofOfOwnership**, **proofOfIndustry**, **proofOfSignatory**, **proofOfDirector**, or **proofOfFundingOrWealthSource**.

* For **individual**, the `type` values can be **identityCard**, **driversLicense**, **passport**, **liveSelfie**, **proofOfNationalIdNumber**, **proofOfResidency**, **proofOfIndustry**, **proofOfIndividualTaxId**, **proofOfFundingOrWealthSource** or **proofOfRelationship**.

* For **soleProprietorship**, the `type` values can be **constitutionalDocument**, **proofOfAddress**, or **proofOfIndustry**.

* For **trust**, the `type` value is **constitutionalDocument**.

* For **unincorporatedPartnership**, the `type` value is **constitutionalDocument**.

* Use **bankStatement** to upload documents for a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).

## Enumeration

`Type84Enum`

## Fields

| Name |
|  --- |
| `BankStatement` |
| `DriversLicense` |
| `IdentityCard` |
| `NationalIdNumber` |
| `Passport` |
| `ProofOfAddress` |
| `ProofOfNationalIdNumber` |
| `ProofOfResidency` |
| `RegistrationDocument` |
| `VatDocument` |
| `ProofOfOrganizationTaxInfo` |
| `ProofOfIndividualTaxId` |
| `ProofOfOwnership` |
| `ProofOfSignatory` |
| `LiveSelfie` |
| `ProofOfIndustry` |
| `ConstitutionalDocument` |
| `ProofOfFundingOrWealthSource` |
| `ProofOfRelationship` |
| `ProofOfDirector` |

## Example

```ts
import { Type84Enum } from 'adyen';

const type84 = Type84Enum.ProofOfOwnership;
```

