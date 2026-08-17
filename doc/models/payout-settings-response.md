
# Payout Settings Response

## Structure

`PayoutSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`PayoutSettings[] \| undefined`](../../doc/models/payout-settings.md) | Optional | The list of payout accounts. |

## Example

```ts
import {
  PayoutSettingsResponse,
  PriorityEnum,
  VerificationStatus1Enum,
} from 'adyen';

const payoutSettingsResponse: PayoutSettingsResponse = {
  data: [
    {
      id: 'id0',
      transferInstrumentId: 'transferInstrumentId8',
      allowed: false,
      enabled: false,
      enabledFromDate: 'enabledFromDate2',
      priority: PriorityEnum.Urgent,
      verificationStatus: VerificationStatus1Enum.Rejected,
    },
    {
      id: 'id0',
      transferInstrumentId: 'transferInstrumentId8',
      allowed: false,
      enabled: false,
      enabledFromDate: 'enabledFromDate2',
      priority: PriorityEnum.Urgent,
      verificationStatus: VerificationStatus1Enum.Rejected,
    }
  ],
};
```

