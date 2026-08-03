
# Other Info 3

Additional information for raising a dispute of `type` **other**. Required for disputes of `type` **other**.

**Note:** The **other** dispute `type` is currently in beta testing. Do not create or submit any disputes for this dispute `type` at this time.

*This model accepts additional fields of type unknown.*

## Structure

`OtherInfo3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `descriptionOfIssue` | `string` | Required | Your description of the issue for raising a dispute of `type` **other**.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `2500` |
| `subType` | [`SubType11`](../../doc/models/sub-type-11.md) | Required | - |
| `whatWasPurchased` | [`ProductType1`](../../doc/models/product-type-1.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { OtherInfo3, ProductType1, SubType11 } from 'adyenlib';

const otherInfo3: OtherInfo3 = {
  descriptionOfIssue: 'descriptionOfIssue2',
  subType: SubType11.Counterfeit,
  whatWasPurchased: ProductType1.Goods,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

