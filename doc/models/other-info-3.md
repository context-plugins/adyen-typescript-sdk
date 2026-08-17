
# Other Info 3

Additional information for raising a dispute of `type` **other**. Required for disputes of `type` **other**.

**Note:** The **other** dispute `type` is currently in beta testing. Do not create or submit any disputes for this dispute `type` at this time.

## Structure

`OtherInfo3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `descriptionOfIssue` | `string` | Required | Your description of the issue for raising a dispute of `type` **other**.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `2500` |
| `subType` | [`SubType11Enum`](../../doc/models/sub-type-11-enum.md) | Required | The specific category of **other** dispute that you are raising.<br><br>Possible values: **atmDispute**, **cancelledGoodsServices**, **cancelledRecurring**, **counterfeit**, **creditNotProcessed**, **notAsDescribed**. |
| `whatWasPurchased` | [`ProductType11Enum`](../../doc/models/product-type-11-enum.md) | Required | The type of product that you purchased.<br><br>Possible values: **goods**, **services**. |

## Example

```ts
import { OtherInfo3, ProductType11Enum, SubType11Enum } from 'adyen';

const otherInfo3: OtherInfo3 = {
  descriptionOfIssue: 'descriptionOfIssue2',
  subType: SubType11Enum.Counterfeit,
  whatWasPurchased: ProductType11Enum.Goods,
};
```

