
# Paginated Get Card Order Item Response

*This model accepts additional fields of type unknown.*

## Structure

`PaginatedGetCardOrderItemResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`CardOrderItem[]`](../../doc/models/card-order-item.md) | Required | List of card order items in the card order batch. |
| `hasNext` | `boolean` | Required | Indicates whether there are more items on the next page. |
| `hasPrevious` | `boolean` | Required | Indicates whether there are more items on the previous page. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaginatedGetCardOrderItemResponse, Status7 } from 'adyen';

const paginatedGetCardOrderItemResponse: PaginatedGetCardOrderItemResponse = {
  data: [
    {
      balancePlatform: 'balancePlatform2',
      card: {
        errorMessage: 'errorMessage4',
        status: Status7.Shipped,
        trackingNumber: 'trackingNumber4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      cardOrderItemId: 'cardOrderItemId6',
      creationDate: '2016-03-13T12:52:32.123Z',
      id: 'id0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  hasNext: false,
  hasPrevious: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

