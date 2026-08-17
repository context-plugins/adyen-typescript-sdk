
# KYC Shareholder Check Result

## Structure

`KYCShareholderCheckResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checks` | [`KYCCheckStatusData[] \| undefined`](../../doc/models/kyc-check-status-data.md) | Optional | A list of the checks and their statuses. |
| `legalArrangementCode` | `string \| undefined` | Optional | The unique ID of the legal arrangement to which the shareholder belongs, if applicable. |
| `legalArrangementEntityCode` | `string \| undefined` | Optional | The unique ID of the legal arrangement entity to which the shareholder belongs, if applicable. |
| `shareholderCode` | `string \| undefined` | Optional | The code of the shareholder to which the check applies. |

## Example

```ts
import { KYCShareholderCheckResult, Status32Enum, Type211Enum } from 'adyen';

const kYCShareholderCheckResult: KYCShareholderCheckResult = {
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
  legalArrangementEntityCode: 'legalArrangementEntityCode4',
  shareholderCode: 'shareholderCode8',
};
```

