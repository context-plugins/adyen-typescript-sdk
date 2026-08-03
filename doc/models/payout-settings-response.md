
# Payout Settings Response

*This model accepts additional fields of type unknown.*

## Structure

`PayoutSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`PayoutSettings[] \| undefined`](../../doc/models/payout-settings.md) | Optional | The list of payout accounts. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  PayoutSettingsResponse,
  Priority1,
  VerificationStatus,
} from 'adyenlib';

const payoutSettingsResponse: PayoutSettingsResponse = {
  data: [
    {
      id: 'id0',
      transferInstrumentId: 'transferInstrumentId8',
      allowed: false,
      enabled: false,
      enabledFromDate: 'enabledFromDate2',
      priority: Priority1.Urgent,
      verificationStatus: VerificationStatus.Rejected,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      id: 'id0',
      transferInstrumentId: 'transferInstrumentId8',
      allowed: false,
      enabled: false,
      enabledFromDate: 'enabledFromDate2',
      priority: Priority1.Urgent,
      verificationStatus: VerificationStatus.Rejected,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

