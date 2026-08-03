
# Not Delivered Info

*This model accepts additional fields of type unknown.*

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
| `whatWasNotDelivered` | [`ProductType2`](../../doc/models/product-type-2.md) | Required | - |
| `whoCancelled` | [`CancellingEntity1 \| undefined`](../../doc/models/cancelling-entity-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NotDeliveredInfo, ProductType2 } from 'adyenlib';

const notDeliveredInfo: NotDeliveredInfo = {
  descriptionOfIssue: 'descriptionOfIssue6',
  lastExpectedDate: '2016-03-13T12:52:32.123Z',
  whatWasNotDelivered: ProductType2.Goods,
  agreedDeliveryLocation: 'agreedDeliveryLocation4',
  dateOfCancellation: '2016-03-13T12:52:32.123Z',
  deliveredToWrongLocation: false,
  didCardholderReturn: false,
  isDeliveryLate: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

