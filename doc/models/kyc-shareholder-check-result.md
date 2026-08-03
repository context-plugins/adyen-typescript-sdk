
# Kyc Shareholder Check Result

*This model accepts additional fields of type unknown.*

## Structure

`KycShareholderCheckResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checks` | [`KycCheckStatusData[] \| undefined`](../../doc/models/kyc-check-status-data.md) | Optional | A list of the checks and their statuses. |
| `legalArrangementCode` | `string \| undefined` | Optional | The unique ID of the legal arrangement to which the shareholder belongs, if applicable. |
| `legalArrangementEntityCode` | `string \| undefined` | Optional | The unique ID of the legal arrangement entity to which the shareholder belongs, if applicable. |
| `shareholderCode` | `string \| undefined` | Optional | The code of the shareholder to which the check applies. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { KycShareholderCheckResult, Status3, Type2 } from 'adyenlib';

const kycShareholderCheckResult: KycShareholderCheckResult = {
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
    },
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
  legalArrangementCode: 'legalArrangementCode6',
  legalArrangementEntityCode: 'legalArrangementEntityCode8',
  shareholderCode: 'shareholderCode2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

