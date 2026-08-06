
# Message Reference 3

Identification of a previous POI transaction.
If `Response.Result` is Success.

*This model accepts additional fields of type unknown.*

## Structure

`MessageReference3`

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
import { MessageCategory2, MessageReference3 } from 'adyen';

const messageReference3: MessageReference3 = {
  messageCategory: MessageCategory2.BalanceInquiry,
  serviceId: 'ServiceID4',
  deviceId: 'DeviceID8',
  saleId: 'SaleID8',
  poiid: 'POIID6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

