
# Patchable Dispute Request

## Structure

`PatchableDisputeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `duplicateInfo` | [`PatchableDisputeRequestDuplicateInfo \| null \| undefined`](../../doc/models/containers/patchable-dispute-request-duplicate-info.md) | Optional | This is a container for one-of cases. |
| `fraudInfo` | [`PatchableDisputeRequestFraudInfo \| null \| undefined`](../../doc/models/containers/patchable-dispute-request-fraud-info.md) | Optional | This is a container for one-of cases. |
| `notDeliveredInfo` | [`PatchableDisputeRequestNotDeliveredInfo \| null \| undefined`](../../doc/models/containers/patchable-dispute-request-not-delivered-info.md) | Optional | This is a container for one-of cases. |
| `otherInfo` | [`PatchableDisputeRequestOtherInfo \| null \| undefined`](../../doc/models/containers/patchable-dispute-request-other-info.md) | Optional | This is a container for one-of cases. |
| `status` | [`PatchableDisputeRequestStatus \| null \| undefined`](../../doc/models/containers/patchable-dispute-request-status.md) | Optional | This is a container for one-of cases. |

## Example

```ts
import {
  DisputeStatusEnum,
  PatchableDisputeRequest,
  ProductType11Enum,
  SubType11Enum,
} from 'adyen';

const patchableDisputeRequest: PatchableDisputeRequest = {
  duplicateInfo: {
    duplicateTransactionId: 'duplicateTransactionId6',
    sameCard: false,
    sameIssuer: false,
  },
  fraudInfo: {
    cardDoesNotBelongToCardholder: false,
    cardWasCounterfeited: false,
    descriptionOfIssue: 'descriptionOfIssue6',
    reportOnly: false,
  },
  notDeliveredInfo: {
    agreedDeliveryLocation: 'agreedDeliveryLocation2',
    dateOfCancellation: '2016-03-13T12:52:32.123Z',
    deliveredToWrongLocation: false,
    descriptionOfIssue: 'descriptionOfIssue2',
    didCardholderReturn: false,
  },
  otherInfo: {
    descriptionOfIssue: 'descriptionOfIssue6',
    subType: SubType11Enum.Counterfeit,
    whatWasPurchased: ProductType11Enum.Goods,
  },
  status: DisputeStatusEnum.SecondPresentment,
};
```

