
# Transfer Event Tracking Data

## Class Name

`TransferEventTrackingData`

## Cases

| Type |
|  --- |
| [`ConfirmationTrackingData`](../../../doc/models/confirmation-tracking-data.md) |
| [`EstimationTrackingData`](../../../doc/models/estimation-tracking-data.md) |
| [`InternalReviewTrackingData`](../../../doc/models/internal-review-tracking-data.md) |

## ConfirmationTrackingData

### Initialization Code

#### Example

```ts
const value: TransferEventTrackingData = {
  status: Status15Enum.Credited,
  type: 'confirmation',
};
```

## EstimationTrackingData

### Initialization Code

#### Example

```ts
const value: TransferEventTrackingData = {
  estimatedArrivalTime: '2016-03-13T12:52:32.123Z',
  type: 'estimation',
};
```

## InternalReviewTrackingData

### Initialization Code

#### Example

```ts
const value: TransferEventTrackingData = {
  status: Status44Enum.Pending,
  type: 'internalReview',
};
```

