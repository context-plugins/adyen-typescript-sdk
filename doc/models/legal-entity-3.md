
# Legal Entity 3

*This model accepts additional fields of type unknown.*

## Structure

`LegalEntity3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `capabilities` | [`Record<string, LegalEntityCapability> \| undefined`](../../doc/models/legal-entity-capability.md) | Optional | Contains key-value pairs that specify the actions that the legal entity can do in your platform.The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability. |
| `documentDetails` | [`DocumentReference[] \| undefined`](../../doc/models/document-reference.md) | Optional | List of documents uploaded for the legal entity. |
| `documents` | [`EntityReference[] \| undefined`](../../doc/models/entity-reference.md) | Optional | List of documents uploaded for the legal entity. |
| `entityAssociations` | [`LegalEntityAssociation[] \| undefined`](../../doc/models/legal-entity-association.md) | Optional | List of legal entities associated with the current legal entity.<br>For example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories. |
| `id` | `string` | Required, Read-only | The unique identifier of the legal entity. |
| `individual` | [`Individual \| undefined`](../../doc/models/individual.md) | Optional | - |
| `organization` | [`Organization \| undefined`](../../doc/models/organization.md) | Optional | - |
| `problems` | [`CapabilityProblem1[] \| undefined`](../../doc/models/capability-problem-1.md) | Optional | List of verification errors related to capabilities for the legal entity. |
| `reference` | `string \| undefined` | Optional | Your reference for the legal entity, maximum 150 characters.<br><br>**Constraints**: *Maximum Length*: `150` |
| `soleProprietorship` | [`SoleProprietorship \| undefined`](../../doc/models/sole-proprietorship.md) | Optional | - |
| `transferInstruments` | [`TransferInstrumentReference[] \| undefined`](../../doc/models/transfer-instrument-reference.md) | Optional, Read-only | List of transfer instruments that the legal entity owns. |
| `trust` | [`Trust \| undefined`](../../doc/models/trust.md) | Optional | - |
| `type` | [`Type182 \| undefined`](../../doc/models/type-182.md) | Optional | - |
| `unincorporatedPartnership` | [`UnincorporatedPartnership \| undefined`](../../doc/models/unincorporated-partnership.md) | Optional | - |
| `verificationDeadlines` | [`VerificationDeadline[] \| undefined`](../../doc/models/verification-deadline.md) | Optional, Read-only | List of verification deadlines and the capabilities that will be disallowed if verification errors are not resolved. |
| `verificationPlan` | `string \| undefined` | Optional | A key-value pair that specifies the verification process for a legal entity. Set to **upfront** for upfront verification for [marketplaces](https://docs.adyen.com/marketplaces/verification-overview/verification-types/#upfront-verification). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AllowedLevel,
  FundingSource,
  Interval,
  LegalEntity3,
  Type132,
  Type142,
} from 'adyenlib';

const legalEntity3: LegalEntity3 = {
  id: 'id8',
  capabilities: {
    'key0': {
      allowed: false,
      allowedLevel: AllowedLevel.High,
      allowedSettings: {
        amountPerIndustry: {
          'key0': {
            currency: 'currency8',
            value: BigInt(56),
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          'key1': {
            currency: 'currency8',
            value: BigInt(56),
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        },
        authorizedCardUsers: false,
        fundingSource: [
          FundingSource.Credit,
          FundingSource.Debit,
          FundingSource.Prepaid
        ],
        interval: Interval.Daily,
        maxAmount: {
          currency: 'currency4',
          value: BigInt(160),
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      requested: false,
      requestedLevel: AllowedLevel.High,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    'key1': {
      allowed: false,
      allowedLevel: AllowedLevel.High,
      allowedSettings: {
        amountPerIndustry: {
          'key0': {
            currency: 'currency8',
            value: BigInt(56),
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          'key1': {
            currency: 'currency8',
            value: BigInt(56),
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        },
        authorizedCardUsers: false,
        fundingSource: [
          FundingSource.Credit,
          FundingSource.Debit,
          FundingSource.Prepaid
        ],
        interval: Interval.Daily,
        maxAmount: {
          currency: 'currency4',
          value: BigInt(160),
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      requested: false,
      requestedLevel: AllowedLevel.High,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    'key2': {
      allowed: false,
      allowedLevel: AllowedLevel.High,
      allowedSettings: {
        amountPerIndustry: {
          'key0': {
            currency: 'currency8',
            value: BigInt(56),
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          'key1': {
            currency: 'currency8',
            value: BigInt(56),
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        },
        authorizedCardUsers: false,
        fundingSource: [
          FundingSource.Credit,
          FundingSource.Debit,
          FundingSource.Prepaid
        ],
        interval: Interval.Daily,
        maxAmount: {
          currency: 'currency4',
          value: BigInt(160),
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      requested: false,
      requestedLevel: AllowedLevel.High,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
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
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  documents: [
    {
      id: 'id4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      id: 'id4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      id: 'id4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  entityAssociations: [
    {
      legalEntityId: 'legalEntityId4',
      type: Type142.ImmediateParentCompany,
      associatorId: 'associatorId2',
      entityType: 'entityType8',
      jobTitle: 'jobTitle4',
      name: 'name0',
      nominee: false,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      legalEntityId: 'legalEntityId4',
      type: Type142.ImmediateParentCompany,
      associatorId: 'associatorId2',
      entityType: 'entityType8',
      jobTitle: 'jobTitle4',
      name: 'name0',
      nominee: false,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  individual: {
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
    email: 'email0',
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
    nationality: 'nationality4',
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
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

