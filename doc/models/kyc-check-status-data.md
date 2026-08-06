
# Kyc Check Status Data

*This model accepts additional fields of type unknown.*

## Structure

`KycCheckStatusData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requiredFields` | `string[] \| undefined` | Optional | A list of the fields required for execution of the check. |
| `status` | [`Status3`](../../doc/models/status-3.md) | Required | - |
| `summary` | [`KycCheckSummary \| undefined`](../../doc/models/kyc-check-summary.md) | Optional | - |
| `type` | [`Type2`](../../doc/models/type-2.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { KycCheckStatusData, Status3, Type2 } from 'adyen';

const kycCheckStatusData: KycCheckStatusData = {
  status: Status3.Passed,
  type: Type2.CardVerification,
  requiredFields: [
    'requiredFields2'
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
};
```

