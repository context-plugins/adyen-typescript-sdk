
# Patchable Other Info

*This model accepts additional fields of type unknown.*

## Structure

`PatchableOtherInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `descriptionOfIssue` | `string \| undefined` | Optional | Your description of the issue for raising a dispute of `type` **other**.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `2500` |
| `subType` | [`SubType11 \| undefined`](../../doc/models/sub-type-11.md) | Optional | - |
| `whatWasPurchased` | [`ProductType1 \| undefined`](../../doc/models/product-type-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PatchableOtherInfo, ProductType1, SubType11 } from 'adyenlib';

const patchableOtherInfo: PatchableOtherInfo = {
  descriptionOfIssue: 'descriptionOfIssue2',
  subType: SubType11.Counterfeit,
  whatWasPurchased: ProductType1.Goods,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

