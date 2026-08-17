
# KYC Verification Result

## Structure

`KYCVerificationResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolder` | [`KYCCheckResult2 \| undefined`](../../doc/models/kyc-check-result-2.md) | Optional | The results of the checks on the account holder. |
| `legalArrangements` | [`KYCLegalArrangementCheckResult[] \| undefined`](../../doc/models/kyc-legal-arrangement-check-result.md) | Optional | The results of the checks on the legal arrangements. |
| `legalArrangementsEntities` | [`KYCLegalArrangementEntityCheckResult[] \| undefined`](../../doc/models/kyc-legal-arrangement-entity-check-result.md) | Optional | The results of the checks on the legal arrangement entities. |
| `payoutMethods` | [`KYCPayoutMethodCheckResult[] \| undefined`](../../doc/models/kyc-payout-method-check-result.md) | Optional | The results of the checks on the payout methods. |
| `shareholders` | [`KYCShareholderCheckResult[] \| undefined`](../../doc/models/kyc-shareholder-check-result.md) | Optional | The results of the checks on the shareholders. |
| `signatories` | [`KYCSignatoryCheckResult[] \| undefined`](../../doc/models/kyc-signatory-check-result.md) | Optional | The results of the checks on the signatories. |
| `ultimateParentCompany` | [`KYCUltimateParentCompanyCheckResult[] \| undefined`](../../doc/models/kyc-ultimate-parent-company-check-result.md) | Optional | The result of the check on the Ultimate Parent Company. |

## Example

```ts
import { KYCVerificationResult, Status32Enum, Type211Enum } from 'adyen';

const kYCVerificationResult: KYCVerificationResult = {
  accountHolder: {
    checks: [
      {
        status: Status32Enum.INVALIDDATA,
        type: Type211Enum.PASSPORTVERIFICATION,
        requiredFields: [
          'requiredFields0',
          'requiredFields1'
        ],
        summary: {
          kycCheckCode: 128,
          kycCheckDescription: 'kycCheckDescription8',
        },
      },
      {
        status: Status32Enum.INVALIDDATA,
        type: Type211Enum.PASSPORTVERIFICATION,
        requiredFields: [
          'requiredFields0',
          'requiredFields1'
        ],
        summary: {
          kycCheckCode: 128,
          kycCheckDescription: 'kycCheckDescription8',
        },
      },
      {
        status: Status32Enum.INVALIDDATA,
        type: Type211Enum.PASSPORTVERIFICATION,
        requiredFields: [
          'requiredFields0',
          'requiredFields1'
        ],
        summary: {
          kycCheckCode: 128,
          kycCheckDescription: 'kycCheckDescription8',
        },
      }
    ],
  },
  legalArrangements: [
    {
      checks: [
        {
          status: Status32Enum.INVALIDDATA,
          type: Type211Enum.PASSPORTVERIFICATION,
          requiredFields: [
            'requiredFields0',
            'requiredFields1'
          ],
          summary: {
            kycCheckCode: 128,
            kycCheckDescription: 'kycCheckDescription8',
          },
        }
      ],
      legalArrangementCode: 'legalArrangementCode2',
    },
    {
      checks: [
        {
          status: Status32Enum.INVALIDDATA,
          type: Type211Enum.PASSPORTVERIFICATION,
          requiredFields: [
            'requiredFields0',
            'requiredFields1'
          ],
          summary: {
            kycCheckCode: 128,
            kycCheckDescription: 'kycCheckDescription8',
          },
        }
      ],
      legalArrangementCode: 'legalArrangementCode2',
    }
  ],
  legalArrangementsEntities: [
    {
      checks: [
        {
          status: Status32Enum.INVALIDDATA,
          type: Type211Enum.PASSPORTVERIFICATION,
          requiredFields: [
            'requiredFields0',
            'requiredFields1'
          ],
          summary: {
            kycCheckCode: 128,
            kycCheckDescription: 'kycCheckDescription8',
          },
        }
      ],
      legalArrangementCode: 'legalArrangementCode6',
      legalArrangementEntityCode: 'legalArrangementEntityCode8',
    },
    {
      checks: [
        {
          status: Status32Enum.INVALIDDATA,
          type: Type211Enum.PASSPORTVERIFICATION,
          requiredFields: [
            'requiredFields0',
            'requiredFields1'
          ],
          summary: {
            kycCheckCode: 128,
            kycCheckDescription: 'kycCheckDescription8',
          },
        }
      ],
      legalArrangementCode: 'legalArrangementCode6',
      legalArrangementEntityCode: 'legalArrangementEntityCode8',
    }
  ],
  payoutMethods: [
    {
      checks: [
        {
          status: Status32Enum.INVALIDDATA,
          type: Type211Enum.PASSPORTVERIFICATION,
          requiredFields: [
            'requiredFields0',
            'requiredFields1'
          ],
          summary: {
            kycCheckCode: 128,
            kycCheckDescription: 'kycCheckDescription8',
          },
        },
        {
          status: Status32Enum.INVALIDDATA,
          type: Type211Enum.PASSPORTVERIFICATION,
          requiredFields: [
            'requiredFields0',
            'requiredFields1'
          ],
          summary: {
            kycCheckCode: 128,
            kycCheckDescription: 'kycCheckDescription8',
          },
        }
      ],
      payoutMethodCode: 'payoutMethodCode8',
    },
    {
      checks: [
        {
          status: Status32Enum.INVALIDDATA,
          type: Type211Enum.PASSPORTVERIFICATION,
          requiredFields: [
            'requiredFields0',
            'requiredFields1'
          ],
          summary: {
            kycCheckCode: 128,
            kycCheckDescription: 'kycCheckDescription8',
          },
        },
        {
          status: Status32Enum.INVALIDDATA,
          type: Type211Enum.PASSPORTVERIFICATION,
          requiredFields: [
            'requiredFields0',
            'requiredFields1'
          ],
          summary: {
            kycCheckCode: 128,
            kycCheckDescription: 'kycCheckDescription8',
          },
        }
      ],
      payoutMethodCode: 'payoutMethodCode8',
    }
  ],
  shareholders: [
    {
      checks: [
        {
          status: Status32Enum.INVALIDDATA,
          type: Type211Enum.PASSPORTVERIFICATION,
          requiredFields: [
            'requiredFields0',
            'requiredFields1'
          ],
          summary: {
            kycCheckCode: 128,
            kycCheckDescription: 'kycCheckDescription8',
          },
        }
      ],
      legalArrangementCode: 'legalArrangementCode0',
      legalArrangementEntityCode: 'legalArrangementEntityCode2',
      shareholderCode: 'shareholderCode6',
    },
    {
      checks: [
        {
          status: Status32Enum.INVALIDDATA,
          type: Type211Enum.PASSPORTVERIFICATION,
          requiredFields: [
            'requiredFields0',
            'requiredFields1'
          ],
          summary: {
            kycCheckCode: 128,
            kycCheckDescription: 'kycCheckDescription8',
          },
        }
      ],
      legalArrangementCode: 'legalArrangementCode0',
      legalArrangementEntityCode: 'legalArrangementEntityCode2',
      shareholderCode: 'shareholderCode6',
    }
  ],
};
```

