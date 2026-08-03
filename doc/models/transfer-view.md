
# Transfer View

*This model accepts additional fields of type unknown.*

## Structure

`TransferView`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `categoryData` | [`TransferViewCategoryData \| undefined`](../../doc/models/containers/transfer-view-category-data.md) | Optional | This is a container for one-of cases. |
| `id` | `string \| undefined` | Optional | The ID of the resource. |
| `reference` | `string` | Required | The [`reference`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_reference) from the `/transfers` request. If you haven't provided any, Adyen generates a unique reference. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Priority, TransferView, Type312 } from 'adyenlib';

const transferView: TransferView = {
  reference: 'reference2',
  categoryData: {
    priority: Priority.Instant,
    type: Type312.Bank,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  id: 'id6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

