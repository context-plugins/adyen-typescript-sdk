
# Message Header

Message header of the Sale to POI protocol message.
It conveys Information related to the Sale to POI protocol management.

*This model accepts additional fields of type unknown.*

## Structure

`MessageHeader`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `protocolVersion` | `string \| undefined` | Optional | If MessageCategory is Login or Diagnosis.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `messageClass` | [`MessageClass1`](../../doc/models/message-class-1.md) | Required | - |
| `messageCategory` | [`MessageCategory1`](../../doc/models/message-category-1.md) | Required | - |
| `messageType` | [`MessageType1`](../../doc/models/message-type-1.md) | Required | - |
| `serviceId` | `string \| undefined` | Optional | Identification of a message pair, which processes a transaction.<br>Required if Service or Event MessageClass message or if Device MessageClass and request from POI or response from Sale.<br><br>**Constraints**: *Pattern*: `^.{1,10}$` |
| `deviceId` | `string \| undefined` | Optional | Identification of a device message pair.<br>If Device MessageClass.<br><br>**Constraints**: *Pattern*: `^.{1,10}$` |
| `saleId` | `string` | Required | Identification of a Sale System or a Sale Terminal for the Sale to POI protocol.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `poiid` | `string` | Required | Identification of a POI System or a POI Terminal for the Sale to POI protocol.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  MessageCategory1,
  MessageClass1,
  MessageHeader,
  MessageType1,
} from 'adyen';

const messageHeader: MessageHeader = {
  messageClass: MessageClass1.Service,
  messageCategory: MessageCategory1.Print,
  messageType: MessageType1.Notification,
  saleId: 'SaleID6',
  poiid: 'POIID2',
  protocolVersion: 'ProtocolVersion0',
  serviceId: 'ServiceID4',
  deviceId: 'DeviceID6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

