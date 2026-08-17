
# KYC Ultimate Parent Company Check Result

## Structure

`KYCUltimateParentCompanyCheckResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checks` | [`KYCCheckStatusData[] \| undefined`](../../doc/models/kyc-check-status-data.md) | Optional | A list of the checks and their statuses. |
| `ultimateParentCompanyCode` | `string \| undefined` | Optional | The code of the Ultimate Parent Company to which the check applies. |

## Example

```ts
import {
  KYCUltimateParentCompanyCheckResult,
  Status32Enum,
  Type211Enum,
} from 'adyen';

const kYCUltimateParentCompanyCheckResult: KYCUltimateParentCompanyCheckResult = {
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
  ultimateParentCompanyCode: 'ultimateParentCompanyCode0',
};
```

