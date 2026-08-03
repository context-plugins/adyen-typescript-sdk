
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
  status: Status110.Credited,
  type: Type834.Confirmation,
};
```

## EstimationTrackingData

### Initialization Code

#### Example

```ts
const value: TransferEventTrackingData = {
  estimatedArrivalTime: '2016-03-13T12:52:32.123Z',
  type: Type84.Estimation,
};
```

## InternalReviewTrackingData

### Initialization Code

#### Example

```ts
const value: TransferEventTrackingData = {
  status: Status44.Pending,
  type: Type90.InternalReview,
};
```

