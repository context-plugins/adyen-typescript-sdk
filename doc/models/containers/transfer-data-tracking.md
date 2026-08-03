
# Transfer Data Tracking

## Class Name

`TransferDataTracking`

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
const value: TransferDataTracking = {
  status: Status110.Credited,
  type: Type834.Confirmation,
};
```

## EstimationTrackingData

### Initialization Code

#### Example

```ts
const value: TransferDataTracking = {
  estimatedArrivalTime: '2016-03-13T12:52:32.123Z',
  type: Type84.Estimation,
};
```

## InternalReviewTrackingData

### Initialization Code

#### Example

```ts
const value: TransferDataTracking = {
  status: Status44.Pending,
  type: Type90.InternalReview,
};
```

