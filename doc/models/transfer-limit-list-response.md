
# Transfer Limit List Response

*This model accepts additional fields of type unknown.*

## Structure

`TransferLimitListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferLimits` | [`TransferLimit[]`](../../doc/models/transfer-limit.md) | Required | List of available transfer limits. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  LimitStatus,
  ScaExemption,
  ScaStatus,
  Scope,
  TransferLimitListResponse,
  TransferType,
} from 'adyenlib';

const transferLimitListResponse: TransferLimitListResponse = {
  transferLimits: [
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      id: 'id8',
      limitStatus: LimitStatus.PendingSca,
      scope: Scope.PerDay,
      startsAt: '2016-03-13T12:52:32.123Z',
      transferType: TransferType.Instant,
      endsAt: '2016-03-13T12:52:32.123Z',
      reference: 'reference6',
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

