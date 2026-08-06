
# Kyc Verification Result 1

The details of KYC Verification of the account holder.

*This model accepts additional fields of type unknown.*

## Structure

`KycVerificationResult1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolder` | [`KycCheckResult \| undefined`](../../doc/models/kyc-check-result.md) | Optional | - |
| `legalArrangements` | [`KycLegalArrangementCheckResult[] \| undefined`](../../doc/models/kyc-legal-arrangement-check-result.md) | Optional | The results of the checks on the legal arrangements. |
| `legalArrangementsEntities` | [`KycLegalArrangementEntityCheckResult[] \| undefined`](../../doc/models/kyc-legal-arrangement-entity-check-result.md) | Optional | The results of the checks on the legal arrangement entities. |
| `payoutMethods` | [`KycPayoutMethodCheckResult[] \| undefined`](../../doc/models/kyc-payout-method-check-result.md) | Optional | The results of the checks on the payout methods. |
| `shareholders` | [`KycShareholderCheckResult[] \| undefined`](../../doc/models/kyc-shareholder-check-result.md) | Optional | The results of the checks on the shareholders. |
| `signatories` | [`KycSignatoryCheckResult[] \| undefined`](../../doc/models/kyc-signatory-check-result.md) | Optional | The results of the checks on the signatories. |
| `ultimateParentCompany` | [`KycUltimateParentCompanyCheckResult[] \| undefined`](../../doc/models/kyc-ultimate-parent-company-check-result.md) | Optional | The result of the check on the Ultimate Parent Company. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { KycVerificationResult1, Status3, Type2 } from 'adyen';

const kycVerificationResult1: KycVerificationResult1 = {
  accountHolder: {
    checks: [
      {
        status: Status3.InvalidData,
        type: Type2.PassportVerification,
        requiredFields: [
          'requiredFields0',
          'requiredFields1'
        ],
        summary: {
          kycCheckCode: 128,
          kycCheckDescription: 'kycCheckDescription8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        status: Status3.InvalidData,
        type: Type2.PassportVerification,
        requiredFields: [
          'requiredFields0',
          'requiredFields1'
        ],
        summary: {
          kycCheckCode: 128,
          kycCheckDescription: 'kycCheckDescription8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        status: Status3.InvalidData,
        type: Type2.PassportVerification,
        requiredFields: [
          'requiredFields0',
          'requiredFields1'
        ],
        summary: {
          kycCheckCode: 128,
          kycCheckDescription: 'kycCheckDescription8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  legalArrangements: [
    {
      checks: [
        {
          status: Status3.InvalidData,
          type: Type2.PassportVerification,
          requiredFields: [
            'requiredFields0',
            'requiredFields1'
          ],
          summary: {
            kycCheckCode: 128,
            kycCheckDescription: 'kycCheckDescription8',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      legalArrangementCode: 'legalArrangementCode2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  legalArrangementsEntities: [
    {
      checks: [
        {
          status: Status3.InvalidData,
          type: Type2.PassportVerification,
          requiredFields: [
            'requiredFields0',
            'requiredFields1'
          ],
          summary: {
            kycCheckCode: 128,
            kycCheckDescription: 'kycCheckDescription8',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      legalArrangementCode: 'legalArrangementCode6',
      legalArrangementEntityCode: 'legalArrangementEntityCode8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  payoutMethods: [
    {
      checks: [
        {
          status: Status3.InvalidData,
          type: Type2.PassportVerification,
          requiredFields: [
            'requiredFields0',
            'requiredFields1'
          ],
          summary: {
            kycCheckCode: 128,
            kycCheckDescription: 'kycCheckDescription8',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          status: Status3.InvalidData,
          type: Type2.PassportVerification,
          requiredFields: [
            'requiredFields0',
            'requiredFields1'
          ],
          summary: {
            kycCheckCode: 128,
            kycCheckDescription: 'kycCheckDescription8',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      payoutMethodCode: 'payoutMethodCode8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  shareholders: [
    {
      checks: [
        {
          status: Status3.InvalidData,
          type: Type2.PassportVerification,
          requiredFields: [
            'requiredFields0',
            'requiredFields1'
          ],
          summary: {
            kycCheckCode: 128,
            kycCheckDescription: 'kycCheckDescription8',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      legalArrangementCode: 'legalArrangementCode0',
      legalArrangementEntityCode: 'legalArrangementEntityCode2',
      shareholderCode: 'shareholderCode6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

