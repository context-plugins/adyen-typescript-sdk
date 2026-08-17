
# Transfer Limit

The transfer limit configured to regulate outgoing transfers.

## Structure

`TransferLimit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | The amount for the transfer limit. This is the maximum amount allowed per transfer or per day based on the `scope` of the limit. |
| `endsAt` | `string \| undefined` | Optional | The date and time when the transfer limit becomes inactive. If you do not specify an end date, the limit stays active until you override it with a new limit.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD** |
| `id` | `string` | Required | The unique identifier of the transfer limit. |
| `limitStatus` | [`LimitStatusEnum`](../../doc/models/limit-status-enum.md) | Required | The status of the transfer limit. Possible values:<br><br>* **active**: the limit is currently active.<br>* **inactive**: the limit is currently inactive.<br>* **pendingSCA**: the limit is pending until your user performs SCA.<br>* **scheduled**: the limit is scheduled to become active at a future date. |
| `reference` | `string \| undefined` | Optional | Your reference for the transfer limit. |
| `scaInformation` | [`ScaInformation1 \| undefined`](../../doc/models/sca-information-1.md) | Optional | Information for the Strong Customer Authentication (SCA) |
| `scope` | [`ScopeEnum`](../../doc/models/scope-enum.md) | Required | The scope to which the transfer limit applies. Possible values:<br><br>* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.<br>* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day. |
| `startsAt` | `string` | Required | The date and time when the transfer limit becomes active. If you specify a date in the future, we will schedule a transfer limit.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD** |
| `transferType` | [`TransferTypeEnum`](../../doc/models/transfer-type-enum.md) | Required | The type of transfer to which the limit applies. Possible values:<br><br>* **instant**: the limit applies to transfers with an **instant** priority.<br>* **all**: the limit applies to all transfers, regardless of priority. |

## Example

```ts
import {
  LimitStatusEnum,
  ScaExemptionEnum,
  ScaStatusEnum,
  ScopeEnum,
  TransferLimit,
  TransferTypeEnum,
} from 'adyen';

const transferLimit: TransferLimit = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  id: 'id0',
  limitStatus: LimitStatusEnum.PendingSCA,
  scope: ScopeEnum.PerDay,
  startsAt: '2016-03-13T12:52:32.123Z',
  transferType: TransferTypeEnum.Instant,
  endsAt: '2016-03-13T12:52:32.123Z',
  reference: 'reference4',
  scaInformation: {
    status: ScaStatusEnum.Pending,
    exemption: ScaExemptionEnum.NotRegulated,
  },
};
```

