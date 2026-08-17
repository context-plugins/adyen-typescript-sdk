
# Account Holder Status 7

The new status of the account holder.

## Structure

`AccountHolderStatus7`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `events` | [`AccountEvent[] \| undefined`](../../doc/models/account-event.md) | Optional | A list of events scheduled for the account holder. |
| `payoutState` | [`AccountPayoutState2 \| undefined`](../../doc/models/account-payout-state-2.md) | Optional | The payout state of the account holder. |
| `processingState` | [`AccountProcessingState2 \| undefined`](../../doc/models/account-processing-state-2.md) | Optional | The processing state of the account holder. |
| `status` | [`Status12Enum`](../../doc/models/status-12-enum.md) | Required | The status of the account holder.<br><br>> Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`. |
| `statusReason` | `string \| undefined` | Optional | The reason why the status was assigned to the account holder. |

## Example

```ts
import { AccountHolderStatus7, EventEnum, Status12Enum } from 'adyen';

const accountHolderStatus7: AccountHolderStatus7 = {
  status: Status12Enum.Active,
  events: [
    {
      event: EventEnum.InactivateAccount,
      executionDate: '2016-03-13T12:52:32.123Z',
      reason: 'reason6',
    },
    {
      event: EventEnum.InactivateAccount,
      executionDate: '2016-03-13T12:52:32.123Z',
      reason: 'reason6',
    },
    {
      event: EventEnum.InactivateAccount,
      executionDate: '2016-03-13T12:52:32.123Z',
      reason: 'reason6',
    }
  ],
  payoutState: {
    allowPayout: false,
    disableReason: 'disableReason2',
    disabled: false,
    notAllowedReason: 'notAllowedReason4',
    payoutLimit: {
      currency: 'currency8',
      value: BigInt(88),
    },
  },
  processingState: {
    disableReason: 'disableReason2',
    disabled: false,
    processedFrom: {
      currency: 'currency4',
      value: BigInt(148),
    },
    processedTo: {
      currency: 'currency2',
      value: BigInt(54),
    },
    tierNumber: 156,
  },
  statusReason: 'statusReason2',
};
```

