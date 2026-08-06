
# Account Holder Status 3

The status of the account holder.

*This model accepts additional fields of type unknown.*

## Structure

`AccountHolderStatus3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `events` | [`AccountEvent[] \| undefined`](../../doc/models/account-event.md) | Optional | A list of events scheduled for the account holder. |
| `payoutState` | [`AccountPayoutState \| undefined`](../../doc/models/account-payout-state.md) | Optional | - |
| `processingState` | [`AccountProcessingState \| undefined`](../../doc/models/account-processing-state.md) | Optional | - |
| `status` | [`Status1`](../../doc/models/status-1.md) | Required | - |
| `statusReason` | `string \| undefined` | Optional | The reason why the status was assigned to the account holder. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountHolderStatus3, Event, Status1 } from 'adyen';

const accountHolderStatus3: AccountHolderStatus3 = {
  status: Status1.Active,
  events: [
    {
      event: Event.InactivateAccount,
      executionDate: '2016-03-13T12:52:32.123Z',
      reason: 'reason6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      event: Event.InactivateAccount,
      executionDate: '2016-03-13T12:52:32.123Z',
      reason: 'reason6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
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
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  processingState: {
    disableReason: 'disableReason2',
    disabled: false,
    processedFrom: {
      currency: 'currency4',
      value: BigInt(148),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    processedTo: {
      currency: 'currency2',
      value: BigInt(54),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    tierNumber: 156,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  statusReason: 'statusReason8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

