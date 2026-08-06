
# Kyc Legal Arrangement Check Result

*This model accepts additional fields of type unknown.*

## Structure

`KycLegalArrangementCheckResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checks` | [`KycCheckStatusData[] \| undefined`](../../doc/models/kyc-check-status-data.md) | Optional | A list of the checks and their statuses. |
| `legalArrangementCode` | `string \| undefined` | Optional | The unique ID of the legal arrangement to which the check applies. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { KycLegalArrangementCheckResult, Status3, Type2 } from 'adyen';

const kycLegalArrangementCheckResult: KycLegalArrangementCheckResult = {
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
  legalArrangementCode: 'legalArrangementCode8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

