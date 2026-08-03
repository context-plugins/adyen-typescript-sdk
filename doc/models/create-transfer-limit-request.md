
# Create Transfer Limit Request

*This model accepts additional fields of type unknown.*

## Structure

`CreateTransferLimitRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount5`](../../doc/models/amount-5.md) | Required | - |
| `endsAt` | `string \| undefined` | Optional | The date and time when the transfer limit becomes inactive. If you do not specify an end date, the limit stays active until you override it with a new limit.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD** |
| `reference` | `string \| undefined` | Optional | Your reference for the transfer limit. |
| `scaInformation` | [`CreateScaInformation \| undefined`](../../doc/models/create-sca-information.md) | Optional | - |
| `scope` | [`Scope`](../../doc/models/scope.md) | Required | - |
| `startsAt` | `string \| undefined` | Optional | The date and time when the transfer limit becomes active. If you specify a date in the future, we will schedule a transfer limit.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD** |
| `transferType` | [`TransferType`](../../doc/models/transfer-type.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CreateTransferLimitRequest,
  ScaExemption,
  Scope,
  TransferType,
} from 'adyenlib';

const createTransferLimitRequest: CreateTransferLimitRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  scope: Scope.PerDay,
  transferType: TransferType.Instant,
  endsAt: '2016-03-13T12:52:32.123Z',
  reference: 'reference2',
  scaInformation: {
    exemption: ScaExemption.NotRegulated,
    scaOnApproval: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  startsAt: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

