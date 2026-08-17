
# Transfer View 2

Contains information about the transfer related to the transaction.

## Structure

`TransferView2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `categoryData` | [`TransferView2CategoryData \| undefined`](../../doc/models/containers/transfer-view-2-category-data.md) | Optional | This is a container for one-of cases. |
| `id` | `string \| undefined` | Optional | The ID of the resource. |
| `reference` | `string` | Required | The [`reference`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_reference) from the `/transfers` request. If you haven't provided any, Adyen generates a unique reference. |

## Example

```ts
import { Priority1Enum, TransferView2, Type310Enum } from 'adyen';

const transferView2: TransferView2 = {
  reference: 'reference8',
  categoryData: {
    priority: Priority1Enum.Instant,
    type: Type310Enum.Bank,
  },
  id: 'id2',
};
```

