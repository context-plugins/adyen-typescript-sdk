
# Transfer Limit List Response

## Structure

`TransferLimitListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferLimits` | [`TransferLimit[]`](../../doc/models/transfer-limit.md) | Required | List of available transfer limits. |

## Example

```ts
import {
  LimitStatusEnum,
  ScaExemptionEnum,
  ScaStatusEnum,
  ScopeEnum,
  TransferLimitListResponse,
  TransferTypeEnum,
} from 'adyen';

const transferLimitListResponse: TransferLimitListResponse = {
  transferLimits: [
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
      },
      id: 'id8',
      limitStatus: LimitStatusEnum.PendingSCA,
      scope: ScopeEnum.PerDay,
      startsAt: '2016-03-13T12:52:32.123Z',
      transferType: TransferTypeEnum.Instant,
      endsAt: '2016-03-13T12:52:32.123Z',
      reference: 'reference6',
      scaInformation: {
        status: ScaStatusEnum.Pending,
        exemption: ScaExemptionEnum.NotRegulated,
      },
    }
  ],
};
```

