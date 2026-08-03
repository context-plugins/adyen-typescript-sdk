
# Card Order

*This model accepts additional fields of type unknown.*

## Structure

`CardOrder`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `beginDate` | `string \| undefined` | Optional | The date when the card order is created. |
| `cardManufacturingProfileId` | `string \| undefined` | Optional | The unique identifier of the card manufacturer profile. |
| `closedDate` | `string \| undefined` | Optional | The date when the card order processing ends. |
| `endDate` | `string \| undefined` | Optional | The date when you manually closed the card order.<br><br>Card orders are automatically closed by the end of the day it was created. If you manually closed it beforehand, the closing date is shown as the `endDate`. |
| `id` | `string \| undefined` | Optional | The unique identifier of the card order. |
| `lockDate` | `string \| undefined` | Optional | The date when the card order processing begins. |
| `serviceCenter` | `string \| undefined` | Optional | The service center. |
| `status` | [`Status6 \| undefined`](../../doc/models/status-6.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardOrder } from 'adyenlib';

const cardOrder: CardOrder = {
  beginDate: '2016-03-13T12:52:32.123Z',
  cardManufacturingProfileId: 'cardManufacturingProfileId6',
  closedDate: '2016-03-13T12:52:32.123Z',
  endDate: '2016-03-13T12:52:32.123Z',
  id: 'id2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

