
# Other Info

*This model accepts additional fields of type unknown.*

## Structure

`OtherInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `descriptionOfIssue` | `string` | Required | Your description of the issue for raising a dispute of `type` **other**.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `2500` |
| `subType` | [`SubType11`](../../doc/models/sub-type-11.md) | Required | - |
| `whatWasPurchased` | [`ProductType1`](../../doc/models/product-type-1.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { OtherInfo, ProductType1, SubType11 } from 'adyenlib';

const otherInfo: OtherInfo = {
  descriptionOfIssue: 'descriptionOfIssue8',
  subType: SubType11.AtmDispute,
  whatWasPurchased: ProductType1.Goods,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

