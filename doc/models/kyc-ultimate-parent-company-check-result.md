
# Kyc Ultimate Parent Company Check Result

*This model accepts additional fields of type unknown.*

## Structure

`KycUltimateParentCompanyCheckResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checks` | [`KycCheckStatusData[] \| undefined`](../../doc/models/kyc-check-status-data.md) | Optional | A list of the checks and their statuses. |
| `ultimateParentCompanyCode` | `string \| undefined` | Optional | The code of the Ultimate Parent Company to which the check applies. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { KycUltimateParentCompanyCheckResult, Status3, Type2 } from 'adyen';

const kycUltimateParentCompanyCheckResult: KycUltimateParentCompanyCheckResult = {
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
  ultimateParentCompanyCode: 'ultimateParentCompanyCode8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

