
# Not Delivered Info

## Structure

`NotDeliveredInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `agreedDeliveryLocation` | `string \| undefined` | Optional | The delivery location specified by the cardholder. Required if **deliveredToWrongLocation** is **true**.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `500` |
| `dateOfCancellation` | `string \| undefined` | Optional | The date the undelivered goods or services were cancelled in YYYY-MM-DD format. |
| `deliveredToWrongLocation` | `boolean \| undefined` | Optional | Indicates goods were delivered to the wrong location.<br><br>Possible values: **true**, **false**. |
| `descriptionOfIssue` | `string` | Required | Your description of the issue for raising a dispute of `type` **notDelivered**.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `2500` |
| `didCardholderReturn` | `boolean \| undefined` | Optional | Indicates if the cardholder returned the goods to the merchant. Required if **isDeliveryLate** is **true**.<br><br>Possible values: **true**, **false**. |
| `isDeliveryLate` | `boolean \| undefined` | Optional | Indicates if the goods or services were delivered late. Required if **whatWasNotDelivered** is **goods**.<br><br>Possible values: **true**, **false**. |
| `isMerchantBankrupt` | `boolean \| undefined` | Optional | Indicates if the transaction was processed by a bankrupt merchant.<br><br>Possible values: **true**, **false**. |
| `isNonFiatOrNft` | `boolean \| undefined` | Optional | Indicates if the transaction is non-fiat or non-fungible token (NFT) related.<br><br>Possible values: **true**, **false**. |
| `lastExpectedDate` | `string` | Required | The date the undelivered goods or services were expected to be delivered in YYYY-MM-DD format. |
| `whatWasNotDelivered` | [`ProductType21Enum`](../../doc/models/product-type-21-enum.md) | Required | The type of product that you expected to receive.<br><br>Possible values: **goods**, **services**. |
| `whoCancelled` | [`CancellingEntity1Enum \| undefined`](../../doc/models/cancelling-entity-1-enum.md) | Optional | The party that initiated the cancellation of the transaction.<br><br>Possible values: **merchant**, **cardholder**. |

## Example

```ts
import { NotDeliveredInfo, ProductType21Enum } from 'adyen';

const notDeliveredInfo: NotDeliveredInfo = {
  descriptionOfIssue: 'descriptionOfIssue6',
  lastExpectedDate: '2016-03-13T12:52:32.123Z',
  whatWasNotDelivered: ProductType21Enum.Goods,
  agreedDeliveryLocation: 'agreedDeliveryLocation4',
  dateOfCancellation: '2016-03-13T12:52:32.123Z',
  deliveredToWrongLocation: false,
  didCardholderReturn: false,
  isDeliveryLate: false,
};
```

