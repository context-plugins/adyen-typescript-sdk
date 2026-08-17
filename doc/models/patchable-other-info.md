
# Patchable Other Info

## Structure

`PatchableOtherInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `descriptionOfIssue` | `string \| undefined` | Optional | Your description of the issue for raising a dispute of `type` **other**.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `2500` |
| `subType` | [`SubType11Enum \| undefined`](../../doc/models/sub-type-11-enum.md) | Optional | The specific category of **other** dispute that you are raising.<br><br>Possible values: **atmDispute**, **cancelledGoodsServices**, **cancelledRecurring**, **counterfeit**, **creditNotProcessed**, **notAsDescribed**. |
| `whatWasPurchased` | [`ProductType11Enum \| undefined`](../../doc/models/product-type-11-enum.md) | Optional | The type of product that you purchased.<br><br>Possible values: **goods**, **services**. |

## Example

```ts
import { PatchableOtherInfo, ProductType11Enum, SubType11Enum } from 'adyen';

const patchableOtherInfo: PatchableOtherInfo = {
  descriptionOfIssue: 'descriptionOfIssue2',
  subType: SubType11Enum.Counterfeit,
  whatWasPurchased: ProductType11Enum.Goods,
};
```

