
# Payout Settings

*This model accepts additional fields of type unknown.*

## Structure

`PayoutSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowed` | `boolean \| undefined` | Optional | Indicates if payouts to the bank account are allowed. This value is set automatically based on the status of the verification process. The value is:<br><br>* **true** if `verificationStatus` is **valid**.<br>* **false** for all other values. |
| `enabled` | `boolean \| undefined` | Optional | Indicates if payouts to this bank account are enabled. Default: **true**.<br><br>To receive payouts into this bank account, both `enabled` and `allowed` must be **true**. |
| `enabledFromDate` | `string \| undefined` | Optional | The date when Adyen starts paying out to this bank account.<br><br>Format: [ISO 8601](https://www.w3.org/TR/NOTE-datetime), for example, **2019-11-23T12:25:28Z** or **2020-05-27T20:25:28+08:00**.<br><br>If not specified, the `enabled` field indicates if payouts are enabled for this bank account.<br><br>If a date is specified and:<br><br>* `enabled`: **true**, payouts are enabled starting the specified date.<br>* `enabled`: **false**, payouts are disabled until the specified date. On the specified date, `enabled` changes to **true** and this field is reset to **null**. |
| `id` | `string` | Required | The unique identifier of the payout setting. |
| `priority` | [`Priority1 \| undefined`](../../doc/models/priority-1.md) | Optional | - |
| `transferInstrumentId` | `string` | Required | The unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments) that contains the details of the bank account. |
| `verificationStatus` | [`VerificationStatus \| undefined`](../../doc/models/verification-status.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayoutSettings, Priority1, VerificationStatus } from 'adyen';

const payoutSettings: PayoutSettings = {
  id: 'id0',
  transferInstrumentId: 'transferInstrumentId2',
  allowed: false,
  enabled: false,
  enabledFromDate: 'enabledFromDate2',
  priority: Priority1.First,
  verificationStatus: VerificationStatus.Rejected,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

