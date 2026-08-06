
# Transfer Limit

The transfer limit configured to regulate outgoing transfers.

*This model accepts additional fields of type unknown.*

## Structure

`TransferLimit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount5`](../../doc/models/amount-5.md) | Required | - |
| `endsAt` | `string \| undefined` | Optional | The date and time when the transfer limit becomes inactive. If you do not specify an end date, the limit stays active until you override it with a new limit.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD** |
| `id` | `string` | Required | The unique identifier of the transfer limit. |
| `limitStatus` | [`LimitStatus`](../../doc/models/limit-status.md) | Required | - |
| `reference` | `string \| undefined` | Optional | Your reference for the transfer limit. |
| `scaInformation` | [`ScaInformation \| undefined`](../../doc/models/sca-information.md) | Optional | - |
| `scope` | [`Scope`](../../doc/models/scope.md) | Required | - |
| `startsAt` | `string` | Required | The date and time when the transfer limit becomes active. If you specify a date in the future, we will schedule a transfer limit.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD** |
| `transferType` | [`TransferType`](../../doc/models/transfer-type.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  LimitStatus,
  ScaExemption,
  ScaStatus,
  Scope,
  TransferLimit,
  TransferType,
} from 'adyen';

const transferLimit: TransferLimit = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  id: 'id0',
  limitStatus: LimitStatus.PendingSca,
  scope: Scope.PerDay,
  startsAt: '2016-03-13T12:52:32.123Z',
  transferType: TransferType.Instant,
  endsAt: '2016-03-13T12:52:32.123Z',
  reference: 'reference4',
  scaInformation: {
    status: ScaStatus.Pending,
    exemption: ScaExemption.NotRegulated,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

