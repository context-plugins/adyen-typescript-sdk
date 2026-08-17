
# Internal Category Data

## Structure

`InternalCategoryData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `modificationMerchantReference` | `string \| undefined` | Optional | The capture's merchant reference included in the transfer. |
| `modificationPspReference` | `string \| undefined` | Optional | The capture reference included in the transfer. |
| `type` | [`Type411Enum \| undefined`](../../doc/models/type-411-enum.md) | Optional | **internal**<br><br>**Default**: `Type411Enum.Internal` |

## Example

```ts
import { InternalCategoryData, Type411Enum } from 'adyen';

const internalCategoryData: InternalCategoryData = {
  modificationMerchantReference: 'modificationMerchantReference4',
  modificationPspReference: 'modificationPspReference6',
  type: Type411Enum.Internal,
};
```

