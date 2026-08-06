
# Patchable Dispute Request

*This model accepts additional fields of type unknown.*

## Structure

`PatchableDisputeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `duplicateInfo` | [`PatchableDisputeRequestDuplicateInfo \| undefined`](../../doc/models/containers/patchable-dispute-request-duplicate-info.md) | Optional | This is a container for one-of cases. |
| `fraudInfo` | [`PatchableDisputeRequestFraudInfo \| undefined`](../../doc/models/containers/patchable-dispute-request-fraud-info.md) | Optional | This is a container for one-of cases. |
| `notDeliveredInfo` | [`PatchableDisputeRequestNotDeliveredInfo \| undefined`](../../doc/models/containers/patchable-dispute-request-not-delivered-info.md) | Optional | This is a container for one-of cases. |
| `otherInfo` | [`PatchableDisputeRequestOtherInfo \| undefined`](../../doc/models/containers/patchable-dispute-request-other-info.md) | Optional | This is a container for one-of cases. |
| `status` | [`PatchableDisputeRequestStatus \| undefined`](../../doc/models/containers/patchable-dispute-request-status.md) | Optional | This is a container for one-of cases. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DisputeStatus,
  PatchableDisputeRequest,
  ProductType1,
  SubType11,
} from 'adyen';

const patchableDisputeRequest: PatchableDisputeRequest = {
  duplicateInfo: {
    duplicateTransactionId: 'duplicateTransactionId6',
    sameCard: false,
    sameIssuer: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  fraudInfo: {
    cardDoesNotBelongToCardholder: false,
    cardWasCounterfeited: false,
    descriptionOfIssue: 'descriptionOfIssue6',
    reportOnly: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  notDeliveredInfo: {
    agreedDeliveryLocation: 'agreedDeliveryLocation2',
    dateOfCancellation: '2016-03-13T12:52:32.123Z',
    deliveredToWrongLocation: false,
    descriptionOfIssue: 'descriptionOfIssue2',
    didCardholderReturn: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  otherInfo: {
    descriptionOfIssue: 'descriptionOfIssue6',
    subType: SubType11.Counterfeit,
    whatWasPurchased: ProductType1.Goods,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  status: DisputeStatus.SecondPresentment,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

