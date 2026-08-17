
# KYC Legal Arrangement Check Result

## Structure

`KYCLegalArrangementCheckResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checks` | [`KYCCheckStatusData[] \| undefined`](../../doc/models/kyc-check-status-data.md) | Optional | A list of the checks and their statuses. |
| `legalArrangementCode` | `string \| undefined` | Optional | The unique ID of the legal arrangement to which the check applies. |

## Example

```ts
import {
  KYCLegalArrangementCheckResult,
  Status32Enum,
  Type211Enum,
} from 'adyen';

const kYCLegalArrangementCheckResult: KYCLegalArrangementCheckResult = {
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
};
```

