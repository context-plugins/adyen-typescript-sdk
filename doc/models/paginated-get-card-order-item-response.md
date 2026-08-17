
# Paginated Get Card Order Item Response

## Structure

`PaginatedGetCardOrderItemResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`CardOrderItem[]`](../../doc/models/card-order-item.md) | Required | List of card order items in the card order batch. |
| `hasNext` | `boolean` | Required | Indicates whether there are more items on the next page. |
| `hasPrevious` | `boolean` | Required | Indicates whether there are more items on the previous page. |

## Example

```ts
import { PaginatedGetCardOrderItemResponse, Status71Enum } from 'adyen';

const paginatedGetCardOrderItemResponse: PaginatedGetCardOrderItemResponse = {
  data: [
    {
      balancePlatform: 'balancePlatform2',
      card: {
        errorMessage: 'errorMessage4',
        status: Status71Enum.Shipped,
        trackingNumber: 'trackingNumber4',
      },
      cardOrderItemId: 'cardOrderItemId6',
      creationDate: '2016-03-13T12:52:32.123Z',
    }
  ],
  hasNext: false,
  hasPrevious: false,
};
```

