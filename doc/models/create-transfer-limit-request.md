
# Create Transfer Limit Request

## Structure

`CreateTransferLimitRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | The amount for the transfer limit. This is the maximum amount allowed per transfer or per day based on the `scope` of the limit. |
| `endsAt` | `string \| undefined` | Optional | The date and time when the transfer limit becomes inactive. If you do not specify an end date, the limit stays active until you override it with a new limit.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD** |
| `reference` | `string \| undefined` | Optional | Your reference for the transfer limit. |
| `scaInformation` | [`CreateScaInformation1 \| undefined`](../../doc/models/create-sca-information-1.md) | Optional | Information for the Strong Customer Authentication (SCA) |
| `scope` | [`ScopeEnum`](../../doc/models/scope-enum.md) | Required | The scope to which the transfer limit applies. Possible values:<br><br>* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.<br>* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day. |
| `startsAt` | `string \| undefined` | Optional | The date and time when the transfer limit becomes active. If you specify a date in the future, we will schedule a transfer limit.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD** |
| `transferType` | [`TransferTypeEnum`](../../doc/models/transfer-type-enum.md) | Required | The type of transfer to which the limit applies. Possible values:<br><br>* **instant**: the limit applies to transfers with an **instant** priority.<br>* **all**: the limit applies to all transfers, regardless of priority. |

## Example

```ts
import {
  CreateTransferLimitRequest,
  ScaExemptionEnum,
  ScopeEnum,
  TransferTypeEnum,
} from 'adyen';

const createTransferLimitRequest: CreateTransferLimitRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  scope: ScopeEnum.PerDay,
  transferType: TransferTypeEnum.Instant,
  endsAt: '2016-03-13T12:52:32.123Z',
  reference: 'reference2',
  scaInformation: {
    exemption: ScaExemptionEnum.NotRegulated,
    scaOnApproval: false,
  },
  startsAt: '2016-03-13T12:52:32.123Z',
};
```

