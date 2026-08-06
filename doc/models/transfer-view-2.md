
# Transfer View 2

Contains information about the transfer related to the transaction.

*This model accepts additional fields of type unknown.*

## Structure

`TransferView2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `categoryData` | [`TransferView2CategoryData \| undefined`](../../doc/models/containers/transfer-view-2-category-data.md) | Optional | This is a container for one-of cases. |
| `id` | `string \| undefined` | Optional | The ID of the resource. |
| `reference` | `string` | Required | The [`reference`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_reference) from the `/transfers` request. If you haven't provided any, Adyen generates a unique reference. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Priority, TransferView2, Type312 } from 'adyen';

const transferView2: TransferView2 = {
  reference: 'reference8',
  categoryData: {
    priority: Priority.Instant,
    type: Type312.Bank,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  id: 'id2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

