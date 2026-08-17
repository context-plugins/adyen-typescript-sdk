
# Transfer Event

## Structure

`TransferEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | The original journal amount. Only applicable for [issuing](https://docs.adyen.com/issuing/) integrations. |
| `amountAdjustments` | [`AmountAdjustment[] \| undefined`](../../doc/models/amount-adjustment.md) | Optional | The amount adjustments in this transfer. Only applicable for [issuing](https://docs.adyen.com/issuing/) integrations. |
| `arn` | `string \| undefined` | Optional | Scheme unique arn identifier useful for tracing captures, chargebacks, refunds, etc. |
| `bookingDate` | `string \| undefined` | Optional | The date when the transfer request was sent. |
| `estimatedArrivalTime` | `string \| undefined` | Optional | The estimated time when the beneficiary should have access to the funds. |
| `eventsData` | [`TransferEventEventsData[] \| undefined`](../../doc/models/containers/transfer-event-events-data.md) | Optional | This is Array of a container for one-of cases. |
| `externalReason` | [`ExternalReason1 \| undefined`](../../doc/models/external-reason-1.md) | Optional | The external reason for the transfer status. |
| `id` | `string \| undefined` | Optional | The unique identifier of the transfer event. |
| `modification` | [`Modification2 \| undefined`](../../doc/models/modification-2.md) | Optional | The payment modification. Only applicable for [returned internal transfers](https://docs.adyen.com/platforms/internal-fund-transfers/internal-transfer-webhooks/#returned-internal-transfer). |
| `mutations` | [`BalanceMutation[] \| undefined`](../../doc/models/balance-mutation.md) | Optional | The list of balance mutations per event. |
| `originalAmount` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | The amount in the original currency. Only applicable for [issuing](https://docs.adyen.com/issuing/) integrations. |
| `reason` | [`Reason1Enum \| undefined`](../../doc/models/reason-1-enum.md) | Optional | The reason for the transfer status. |
| `status` | [`Status24Enum \| undefined`](../../doc/models/status-24-enum.md) | Optional | The status of the transfer event. |
| `tracingData` | [`TransferEventTracingData \| undefined`](../../doc/models/containers/transfer-event-tracing-data.md) | Optional | This is a container for one-of cases. |
| `trackingData` | [`TransferEventTrackingData \| undefined`](../../doc/models/containers/transfer-event-tracking-data.md) | Optional | This is a container for one-of cases. |
| `transactionId` | `string \| undefined` | Optional | The id of the transaction that is related to this accounting event. Only sent for events of type **accounting** where the balance changes. |
| `type` | [`Type73Enum \| undefined`](../../doc/models/type-73-enum.md) | Optional | The type of the transfer event. Possible values: **accounting**, **tracking**. |
| `updateDate` | `string \| undefined` | Optional | The date when the tracking status was updated. |
| `valueDate` | `string \| undefined` | Optional | The date when the funds are expected to be deducted from or credited to the balance account. This date can be in either the past or future. |

## Example

```ts
import { AmountAdjustmentTypeEnum, TransferEvent } from 'adyen';

const transferEvent: TransferEvent = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  amountAdjustments: [
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
      },
      amountAdjustmentType: AmountAdjustmentTypeEnum.AtmMarkup,
      basepoints: 170,
    },
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
      },
      amountAdjustmentType: AmountAdjustmentTypeEnum.AtmMarkup,
      basepoints: 170,
    },
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
      },
      amountAdjustmentType: AmountAdjustmentTypeEnum.AtmMarkup,
      basepoints: 170,
    }
  ],
  arn: 'arn8',
  bookingDate: '2016-03-13T12:52:32.123Z',
  estimatedArrivalTime: '2016-03-13T12:52:32.123Z',
};
```

