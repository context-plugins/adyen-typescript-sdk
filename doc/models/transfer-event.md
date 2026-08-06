
# Transfer Event

*This model accepts additional fields of type unknown.*

## Structure

`TransferEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount5 \| undefined`](../../doc/models/amount-5.md) | Optional | - |
| `amountAdjustments` | [`AmountAdjustment[] \| undefined`](../../doc/models/amount-adjustment.md) | Optional | The amount adjustments in this transfer. Only applicable for [issuing](https://docs.adyen.com/issuing/) integrations. |
| `arn` | `string \| undefined` | Optional | Scheme unique arn identifier useful for tracing captures, chargebacks, refunds, etc. |
| `bookingDate` | `string \| undefined` | Optional | The date when the transfer request was sent. |
| `estimatedArrivalTime` | `string \| undefined` | Optional | The estimated time when the beneficiary should have access to the funds. |
| `eventsData` | [`TransferEventEventsData[] \| undefined`](../../doc/models/containers/transfer-event-events-data.md) | Optional | This is Array of a container for one-of cases. |
| `externalReason` | [`ExternalReason \| undefined`](../../doc/models/external-reason.md) | Optional | - |
| `id` | `string \| undefined` | Optional | The unique identifier of the transfer event. |
| `modification` | [`Modification \| undefined`](../../doc/models/modification.md) | Optional | - |
| `mutations` | [`BalanceMutation[] \| undefined`](../../doc/models/balance-mutation.md) | Optional | The list of balance mutations per event. |
| `originalAmount` | [`OriginalAmount \| undefined`](../../doc/models/original-amount.md) | Optional | - |
| `reason` | [`Reason2 \| undefined`](../../doc/models/reason-2.md) | Optional | - |
| `status` | [`Status25 \| undefined`](../../doc/models/status-25.md) | Optional | - |
| `tracingData` | [`TransferEventTracingData \| undefined`](../../doc/models/containers/transfer-event-tracing-data.md) | Optional | This is a container for one-of cases. |
| `trackingData` | [`TransferEventTrackingData \| undefined`](../../doc/models/containers/transfer-event-tracking-data.md) | Optional | This is a container for one-of cases. |
| `transactionId` | `string \| undefined` | Optional | The id of the transaction that is related to this accounting event. Only sent for events of type **accounting** where the balance changes. |
| `type` | [`Type74 \| undefined`](../../doc/models/type-74.md) | Optional | - |
| `updateDate` | `string \| undefined` | Optional | The date when the tracking status was updated. |
| `valueDate` | `string \| undefined` | Optional | The date when the funds are expected to be deducted from or credited to the balance account. This date can be in either the past or future. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AmountAdjustmentType, TransferEvent } from 'adyen';

const transferEvent: TransferEvent = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  amountAdjustments: [
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      amountAdjustmentType: AmountAdjustmentType.AtmMarkup,
      basepoints: 170,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      amountAdjustmentType: AmountAdjustmentType.AtmMarkup,
      basepoints: 170,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      amountAdjustmentType: AmountAdjustmentType.AtmMarkup,
      basepoints: 170,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  arn: 'arn8',
  bookingDate: '2016-03-13T12:52:32.123Z',
  estimatedArrivalTime: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

