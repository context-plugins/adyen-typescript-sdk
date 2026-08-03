
# Internal Category Data

*This model accepts additional fields of type unknown.*

## Structure

`InternalCategoryData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `modificationMerchantReference` | `string \| undefined` | Optional | The capture's merchant reference included in the transfer. |
| `modificationPspReference` | `string \| undefined` | Optional | The capture reference included in the transfer. |
| `type` | [`Type410 \| undefined`](../../doc/models/type-410.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InternalCategoryData, Type410 } from 'adyenlib';

const internalCategoryData: InternalCategoryData = {
  modificationMerchantReference: 'modificationMerchantReference4',
  modificationPspReference: 'modificationPspReference6',
  type: Type410.Internal,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

