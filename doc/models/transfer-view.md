
# Transfer View

## Structure

`TransferView`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `categoryData` | [`TransferViewCategoryData \| undefined`](../../doc/models/containers/transfer-view-category-data.md) | Optional | This is a container for one-of cases. |
| `id` | `string \| undefined` | Optional | The ID of the resource. |
| `reference` | `string` | Required | The [`reference`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_reference) from the `/transfers` request. If you haven't provided any, Adyen generates a unique reference. |

## Example

```ts
import { Priority1Enum, TransferView, Type310Enum } from 'adyen';

const transferView: TransferView = {
  reference: 'reference2',
  categoryData: {
    priority: Priority1Enum.Instant,
    type: Type310Enum.Bank,
  },
  id: 'id6',
};
```

