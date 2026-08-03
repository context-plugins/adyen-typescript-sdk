
# Paginated Get Card Order Response

*This model accepts additional fields of type unknown.*

## Structure

`PaginatedGetCardOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardOrders` | [`CardOrder[] \| undefined`](../../doc/models/card-order.md) | Optional | Contains objects with information about card orders. |
| `hasNext` | `boolean` | Required | Indicates whether there are more items on the next page. |
| `hasPrevious` | `boolean` | Required | Indicates whether there are more items on the previous page. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaginatedGetCardOrderResponse } from 'adyenlib';

const paginatedGetCardOrderResponse: PaginatedGetCardOrderResponse = {
  hasNext: false,
  hasPrevious: false,
  cardOrders: [
    {
      beginDate: '2016-03-13T12:52:32.123Z',
      cardManufacturingProfileId: 'cardManufacturingProfileId6',
      closedDate: '2016-03-13T12:52:32.123Z',
      endDate: '2016-03-13T12:52:32.123Z',
      id: 'id2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      beginDate: '2016-03-13T12:52:32.123Z',
      cardManufacturingProfileId: 'cardManufacturingProfileId6',
      closedDate: '2016-03-13T12:52:32.123Z',
      endDate: '2016-03-13T12:52:32.123Z',
      id: 'id2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      beginDate: '2016-03-13T12:52:32.123Z',
      cardManufacturingProfileId: 'cardManufacturingProfileId6',
      closedDate: '2016-03-13T12:52:32.123Z',
      endDate: '2016-03-13T12:52:32.123Z',
      id: 'id2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

