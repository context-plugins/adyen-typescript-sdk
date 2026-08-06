
# Message Reference 4

Identification of a previous POI transaction.

*This model accepts additional fields of type unknown.*

## Structure

`MessageReference4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageCategory` | [`MessageCategory2 \| undefined`](../../doc/models/message-category-2.md) | Optional | - |
| `serviceId` | `string \| undefined` | Optional | Identification of a message pair, which processes a transaction.<br><br>**Constraints**: *Pattern*: `^.{1,10}$` |
| `deviceId` | `string \| undefined` | Optional | Identification of a device message pair.<br><br>**Constraints**: *Pattern*: `^.{1,10}$` |
| `saleId` | `string \| undefined` | Optional | Identification of a Sale System or a Sale Terminal for the Sale to POI protocol.<br>default MessageHeader.SaleID.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `poiid` | `string \| undefined` | Optional | Identification of a POI System or a POI Terminal for the Sale to POI protocol.<br>Default `MessageHeader.POIID`.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MessageCategory2, MessageReference4 } from 'adyen';

const messageReference4: MessageReference4 = {
  messageCategory: MessageCategory2.EnableService,
  serviceId: 'ServiceID2',
  deviceId: 'DeviceID0',
  saleId: 'SaleID0',
  poiid: 'POIID4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

