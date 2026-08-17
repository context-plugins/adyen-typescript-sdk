
# Legal Entity Info

## Structure

`LegalEntityInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `capabilities` | [`Record<string, LegalEntityCapability> \| undefined`](../../doc/models/legal-entity-capability.md) | Optional | Contains key-value pairs that specify the actions that the legal entity can do in your platform.The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability. |
| `entityAssociations` | [`LegalEntityAssociation[] \| undefined`](../../doc/models/legal-entity-association.md) | Optional | List of legal entities associated with the current legal entity.<br>For example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories. |
| `individual` | [`Individual1 \| undefined`](../../doc/models/individual-1.md) | Optional | Information about the individual. Required if `type` is **individual**. |
| `organization` | [`Organization1 \| undefined`](../../doc/models/organization-1.md) | Optional | Information about the organization. Required if `type` is **organization**. |
| `reference` | `string \| undefined` | Optional | Your reference for the legal entity, maximum 150 characters.<br><br>**Constraints**: *Maximum Length*: `150` |
| `soleProprietorship` | [`SoleProprietorship1 \| undefined`](../../doc/models/sole-proprietorship-1.md) | Optional | Information about the sole proprietorship. Required if `type` is **soleProprietorship**. |
| `trust` | [`Trust1 \| undefined`](../../doc/models/trust-1.md) | Optional | Information about the trust. Required if `type` is **trust**. |
| `type` | [`Type182Enum \| undefined`](../../doc/models/type-182-enum.md) | Optional | The type of legal entity.<br><br>Possible values: **individual**, **organization**, **soleProprietorship**, or **trust**. |
| `unincorporatedPartnership` | [`UnincorporatedPartnership1 \| undefined`](../../doc/models/unincorporated-partnership-1.md) | Optional | Information about the unincorporated partnership. Required if `type` is **unincorporatedPartnership**. |
| `verificationPlan` | `string \| undefined` | Optional | A key-value pair that specifies the verification process for a legal entity. Set to **upfront** for upfront verification for [marketplaces](https://docs.adyen.com/marketplaces/verification-overview/verification-types/#upfront-verification). |

## Example

```ts
import {
  FundingSourceEnum,
  IntervalEnum,
  LegalEntityInfo,
  Type132Enum,
  Type142Enum,
} from 'adyen';

const legalEntityInfo: LegalEntityInfo = {
  capabilities: {
    'key0': {
      allowedSettings: {
        amountPerIndustry: {
          'key0': {
            currency: 'currency8',
            value: BigInt(56),
          },
          'key1': {
            currency: 'currency8',
            value: BigInt(56),
          }
        },
        authorizedCardUsers: false,
        fundingSource: [
          FundingSourceEnum.Credit,
          FundingSourceEnum.Debit,
          FundingSourceEnum.Prepaid
        ],
        interval: IntervalEnum.Daily,
        maxAmount: {
          currency: 'currency4',
          value: BigInt(160),
        },
      },
    }
  },
  entityAssociations: [
    {
      legalEntityId: 'legalEntityId4',
      type: Type142Enum.ImmediateParentCompany,
      jobTitle: 'jobTitle4',
      nominee: false,
    }
  ],
  individual: {
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
  },
  organization: {
    legalName: 'legalName2',
    registeredAddress: {
      country: 'country4',
      city: 'city0',
      postalCode: 'postalCode8',
      stateOrProvince: 'stateOrProvince8',
      street: 'street0',
      street2: 'street24',
    },
    countryOfGoverningLaw: 'countryOfGoverningLaw8',
    dateOfIncorporation: 'dateOfIncorporation4',
    dateOfInitiationOfLegalProceeding: 'dateOfInitiationOfLegalProceeding6',
    description: 'description6',
    doingBusinessAs: 'doingBusinessAs4',
  },
  reference: 'reference0',
};
```

