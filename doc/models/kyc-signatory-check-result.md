
# KYC Signatory Check Result

## Structure

`KYCSignatoryCheckResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checks` | [`KYCCheckStatusData[] \| undefined`](../../doc/models/kyc-check-status-data.md) | Optional | A list of the checks and their statuses. |
| `signatoryCode` | `string \| undefined` | Optional | The code of the signatory to which the check applies. |

## Example

```ts
import { KYCSignatoryCheckResult, Status32Enum, Type211Enum } from 'adyen';

const kYCSignatoryCheckResult: KYCSignatoryCheckResult = {
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
  signatoryCode: 'signatoryCode6',
};
```

