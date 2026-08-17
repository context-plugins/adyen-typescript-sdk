
# KYC Payout Method Check Result

## Structure

`KYCPayoutMethodCheckResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checks` | [`KYCCheckStatusData[] \| undefined`](../../doc/models/kyc-check-status-data.md) | Optional | A list of the checks and their statuses. |
| `payoutMethodCode` | `string \| undefined` | Optional | The unique ID of the payoput method to which the check applies. |

## Example

```ts
import { KYCPayoutMethodCheckResult, Status32Enum, Type211Enum } from 'adyen';

const kYCPayoutMethodCheckResult: KYCPayoutMethodCheckResult = {
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
  payoutMethodCode: 'payoutMethodCode6',
};
```

