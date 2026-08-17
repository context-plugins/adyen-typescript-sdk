
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
  status: Status15Enum.Credited,
  type: 'confirmation',
};
```

## EstimationTrackingData

### Initialization Code

#### Example

```ts
const value: TransferDataTracking = {
  estimatedArrivalTime: '2016-03-13T12:52:32.123Z',
  type: 'estimation',
};
```

## InternalReviewTrackingData

### Initialization Code

#### Example

```ts
const value: TransferDataTracking = {
  status: Status44Enum.Pending,
  type: 'internalReview',
};
```

