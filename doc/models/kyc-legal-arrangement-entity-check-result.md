
# KYC Legal Arrangement Entity Check Result

## Structure

`KYCLegalArrangementEntityCheckResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checks` | [`KYCCheckStatusData[] \| undefined`](../../doc/models/kyc-check-status-data.md) | Optional | A list of the checks and their statuses. |
| `legalArrangementCode` | `string \| undefined` | Optional | The unique ID of the legal arrangement to which the entity belongs. |
| `legalArrangementEntityCode` | `string \| undefined` | Optional | The unique ID of the legal arrangement entity to which the check applies. |

## Example

```ts
import {
  KYCLegalArrangementEntityCheckResult,
  Status32Enum,
  Type211Enum,
} from 'adyen';

const kYCLegalArrangementEntityCheckResult: KYCLegalArrangementEntityCheckResult = {
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
  legalArrangementCode: 'legalArrangementCode4',
  legalArrangementEntityCode: 'legalArrangementEntityCode6',
};
```

