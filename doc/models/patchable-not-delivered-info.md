
# Patchable Not Delivered Info

## Structure

`PatchableNotDeliveredInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `agreedDeliveryLocation` | `string \| null \| undefined` | Optional | The delivery location specified by the cardholder. Required if **deliveredToWrongLocation** is **true**.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `500` |
| `dateOfCancellation` | `string \| null \| undefined` | Optional | The date the undelivered goods or services were cancelled in YYYY-MM-DD format. |
| `deliveredToWrongLocation` | `boolean \| null \| undefined` | Optional | Indicates goods were delivered to the wrong location.<br><br>Possible values: **true**, **false**. |
| `descriptionOfIssue` | `string \| undefined` | Optional | Your description of the issue for raising a dispute of `type` **notDelivered**.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `2500` |
| `didCardholderReturn` | `boolean \| null \| undefined` | Optional | Indicates if the cardholder returned the goods to the merchant. Required if **isDeliveryLate** is **true**.<br><br>Possible values: **true**, **false**. |
| `isDeliveryLate` | `boolean \| null \| undefined` | Optional | Indicates if the goods or services were delivered late. Required if **whatWasNotDelivered** is **goods**.<br><br>Possible values: **true**, **false**. |
| `isMerchantBankrupt` | `boolean \| null \| undefined` | Optional | Indicates if the transaction was processed by a bankrupt merchant.<br><br>Possible values: **true**, **false**. |
| `isNonFiatOrNft` | `boolean \| null \| undefined` | Optional | Indicates if the transaction is non-fiat or non-fungible token (NFT) related.<br><br>Possible values: **true**, **false**. |
| `lastExpectedDate` | `string \| undefined` | Optional | The date the undelivered goods or services were expected to be delivered in YYYY-MM-DD format. |
| `whatWasNotDelivered` | [`ProductType21Enum \| undefined`](../../doc/models/product-type-21-enum.md) | Optional | The type of product that you expected to receive.<br><br>Possible values: **goods**, **services**. |
| `whoCancelled` | [`PatchableNotDeliveredInfoWhoCancelled \| null \| undefined`](../../doc/models/containers/patchable-not-delivered-info-who-cancelled.md) | Optional | This is a container for one-of cases. |

## Example

```ts
import { PatchableNotDeliveredInfo } from 'adyen';

const patchableNotDeliveredInfo: PatchableNotDeliveredInfo = {
  agreedDeliveryLocation: 'agreedDeliveryLocation0',
  dateOfCancellation: '2016-03-13T12:52:32.123Z',
  deliveredToWrongLocation: false,
  descriptionOfIssue: 'descriptionOfIssue0',
  didCardholderReturn: false,
};
```

