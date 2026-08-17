
# Dispute Request

## Structure

`DisputeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Your description for the dispute.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `50` |
| `disputedAmount` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | The amount for which you dispute the transaction. The disputed amount cannot be greater than the transaction amount. If you do not provide an amount, the entire transaction amount will be disputed. |
| `duplicateInfo` | [`DuplicateInfo1 \| undefined`](../../doc/models/duplicate-info-1.md) | Optional | Additional information for raising a dispute of `type` **duplicate**. Required for disputes of `type` **duplicate**. |
| `fraudInfo` | [`FraudInfo1 \| undefined`](../../doc/models/fraud-info-1.md) | Optional | Additional information for raising a dispute of `type` **fraud**. Required for disputes of `type` **fraud**. |
| `notDeliveredInfo` | [`NotDeliveredInfo1 \| undefined`](../../doc/models/not-delivered-info-1.md) | Optional | Additional information for raising a dispute of `type` **notDelivered**. Required for disputes of `type` **notDelivered**. |
| `otherInfo` | [`OtherInfo3 \| undefined`](../../doc/models/other-info-3.md) | Optional | Additional information for raising a dispute of `type` **other**. Required for disputes of `type` **other**.<br><br>**Note:** The **other** dispute `type` is currently in beta testing. Do not create or submit any disputes for this dispute `type` at this time. |
| `status` | [`DisputeStatus1Enum \| undefined`](../../doc/models/dispute-status-1-enum.md) | Optional | The current status of the dispute.<br><br>When you create a dispute, you can only set the `status` to **draft**. When you update a dispute, you can set the `status` to **submitted** or **closed**.<br><br>Possible values: **draft**, **submitted**, **closed**, **won**, **chargeback**, **secondPresentment**. |
| `transactionId` | `string` | Required | The unique reference of the transaction for which you are raising the dispute.<br><br>**Constraints**: *Minimum Length*: `1` |
| `type` | `string` | Required | The type of the dispute.<br><br>Possible values: **duplicate**, **fraud**, **notDelivered**, **other**.<br><br>**Note:** The **other** dispute `type` is currently in beta testing. Do not create or submit any disputes for this dispute `type` at this time. |

## Example

```ts
import { DisputeRequest, ProductType21Enum } from 'adyen';

const disputeRequest: DisputeRequest = {
  transactionId: 'transactionId2',
  type: 'type2',
  description: 'description2',
  disputedAmount: {
    currency: 'currency0',
    value: BigInt(162),
  },
  duplicateInfo: {
    duplicateTransactionId: 'duplicateTransactionId4',
    sameCard: false,
    sameIssuer: false,
  },
  fraudInfo: {
    cardDoesNotBelongToCardholder: false,
    cardWasCounterfeited: false,
    descriptionOfIssue: 'descriptionOfIssue2',
    reportOnly: false,
  },
  notDeliveredInfo: {
    descriptionOfIssue: 'descriptionOfIssue6',
    lastExpectedDate: '2016-03-13T12:52:32.123Z',
    whatWasNotDelivered: ProductType21Enum.Goods,
    agreedDeliveryLocation: 'agreedDeliveryLocation4',
    dateOfCancellation: '2016-03-13T12:52:32.123Z',
    deliveredToWrongLocation: false,
    didCardholderReturn: false,
    isDeliveryLate: false,
  },
};
```

