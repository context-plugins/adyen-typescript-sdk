
# Legal Entity 3

## Structure

`LegalEntity3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `capabilities` | [`Record<string, LegalEntityCapability> \| undefined`](../../doc/models/legal-entity-capability.md) | Optional | Contains key-value pairs that specify the actions that the legal entity can do in your platform.The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability. |
| `documentDetails` | [`DocumentReference[] \| undefined`](../../doc/models/document-reference.md) | Optional | List of documents uploaded for the legal entity. |
| `documents` | [`UploadAndroidAppResponse[] \| undefined`](../../doc/models/upload-android-app-response.md) | Optional | List of documents uploaded for the legal entity. |
| `entityAssociations` | [`LegalEntityAssociation[] \| undefined`](../../doc/models/legal-entity-association.md) | Optional | List of legal entities associated with the current legal entity.<br>For example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories. |
| `id` | `string` | Required, Read-only | The unique identifier of the legal entity. |
| `individual` | [`Individual1 \| undefined`](../../doc/models/individual-1.md) | Optional | Information about the individual. Required if `type` is **individual**. |
| `organization` | [`Organization1 \| undefined`](../../doc/models/organization-1.md) | Optional | Information about the organization. Required if `type` is **organization**. |
| `problems` | [`CapabilityProblem1[] \| undefined`](../../doc/models/capability-problem-1.md) | Optional | List of verification errors related to capabilities for the legal entity. |
| `reference` | `string \| undefined` | Optional | Your reference for the legal entity, maximum 150 characters.<br><br>**Constraints**: *Maximum Length*: `150` |
| `soleProprietorship` | [`SoleProprietorship1 \| undefined`](../../doc/models/sole-proprietorship-1.md) | Optional | Information about the sole proprietorship. Required if `type` is **soleProprietorship**. |
| `transferInstruments` | [`TransferInstrumentReference[] \| undefined`](../../doc/models/transfer-instrument-reference.md) | Optional, Read-only | List of transfer instruments that the legal entity owns. |
| `trust` | [`Trust1 \| undefined`](../../doc/models/trust-1.md) | Optional | Information about the trust. Required if `type` is **trust**. |
| `type` | [`Type182Enum \| undefined`](../../doc/models/type-182-enum.md) | Optional | The type of legal entity.<br><br>Possible values: **individual**, **organization**, **soleProprietorship**, or **trust**. |
| `unincorporatedPartnership` | [`UnincorporatedPartnership1 \| undefined`](../../doc/models/unincorporated-partnership-1.md) | Optional | Information about the unincorporated partnership. Required if `type` is **unincorporatedPartnership**. |
| `verificationDeadlines` | [`VerificationDeadline[] \| undefined`](../../doc/models/verification-deadline.md) | Optional, Read-only | List of verification deadlines and the capabilities that will be disallowed if verification errors are not resolved. |
| `verificationPlan` | `string \| undefined` | Optional | A key-value pair that specifies the verification process for a legal entity. Set to **upfront** for upfront verification for [marketplaces](https://docs.adyen.com/marketplaces/verification-overview/verification-types/#upfront-verification). |

## Example

```ts
import {
  FundingSourceEnum,
  IntervalEnum,
  LegalEntity3,
  Type132Enum,
  Type142Enum,
} from 'adyen';

const legalEntity3: LegalEntity3 = {
  id: '',
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
    },
    'key1': {
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
    },
    'key2': {
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
  documentDetails: [
    {
      active: false,
      description: 'description4',
      fileName: 'fileName8',
      id: 'id4',
      modificationDate: '2016-03-13T12:52:32.123Z',
    }
  ],
  documents: [
    {
      id: 'id4',
    },
    {
      id: 'id4',
    },
    {
      id: 'id4',
    }
  ],
  entityAssociations: [
    {
      legalEntityId: 'legalEntityId4',
      type: Type142Enum.ImmediateParentCompany,
      jobTitle: 'jobTitle4',
      nominee: false,
    },
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
};
```

