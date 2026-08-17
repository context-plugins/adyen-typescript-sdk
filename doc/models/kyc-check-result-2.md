
# KYC Check Result 2

The results of the checks on the account holder.

## Structure

`KYCCheckResult2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checks` | [`KYCCheckStatusData[] \| undefined`](../../doc/models/kyc-check-status-data.md) | Optional | A list of the checks and their statuses. |

## Example

```ts
import { KYCCheckResult2, Status32Enum, Type211Enum } from 'adyen';

const kYCCheckResult2: KYCCheckResult2 = {
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
};
```

