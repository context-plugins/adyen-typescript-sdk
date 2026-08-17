
# Other Info

## Structure

`OtherInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `descriptionOfIssue` | `string` | Required | Your description of the issue for raising a dispute of `type` **other**.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `2500` |
| `subType` | [`SubType11Enum`](../../doc/models/sub-type-11-enum.md) | Required | The specific category of **other** dispute that you are raising.<br><br>Possible values: **atmDispute**, **cancelledGoodsServices**, **cancelledRecurring**, **counterfeit**, **creditNotProcessed**, **notAsDescribed**. |
| `whatWasPurchased` | [`ProductType11Enum`](../../doc/models/product-type-11-enum.md) | Required | The type of product that you purchased.<br><br>Possible values: **goods**, **services**. |

## Example

```ts
import { OtherInfo, ProductType11Enum, SubType11Enum } from 'adyen';

const otherInfo: OtherInfo = {
  descriptionOfIssue: 'descriptionOfIssue8',
  subType: SubType11Enum.AtmDispute,
  whatWasPurchased: ProductType11Enum.Goods,
};
```

