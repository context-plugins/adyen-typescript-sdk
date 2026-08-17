
# Message Header

Message header of the Sale to POI protocol message.
It conveys Information related to the Sale to POI protocol management.

## Structure

`MessageHeader`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `protocolVersion` | `string \| undefined` | Optional | If MessageCategory is Login or Diagnosis.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `messageClass` | [`MessageClass1Enum`](../../doc/models/message-class-1-enum.md) | Required | Class of the message.<br>Possible values:<br><br>* **Device**<br>* **Event**<br>* **Service** |
| `messageCategory` | [`MessageCategory1Enum`](../../doc/models/message-category-1-enum.md) | Required | Category of message.<br>Possible values:<br><br>* **Abort**<br>* **Admin**<br>* **BalanceInquiry**<br>* **Batch**<br>* **CardAcquisition**<br>* **CardReaderInit**<br>* **CardReaderPowerOff**<br>* **Diagnosis**<br>* **Display**<br>* **EnableService**<br>* **Event**<br>* **GetTotals**<br>* **Input**<br>* **InputUpdate**<br>* **Login**<br>* **Logout**<br>* **Loyalty**<br>* **None**<br>* **PIN**<br>* **Payment**<br>* **Print**<br>* **Reconciliation**<br>* **Reversal**<br>* **Sound**<br>* **StoredValue**<br>* **TransactionStatus**<br>* **Transmit** |
| `messageType` | [`MessageType1Enum`](../../doc/models/message-type-1-enum.md) | Required | Type of message of the Sale to POI protocol.<br>Possible values:<br><br>* **Notification**<br>* **Request**<br>* **Response** |
| `serviceID` | `string \| undefined` | Optional | Identification of a message pair, which processes a transaction.<br>Required if Service or Event MessageClass message or if Device MessageClass and request from POI or response from Sale.<br><br>**Constraints**: *Pattern*: `^.{1,10}$` |
| `deviceID` | `string \| undefined` | Optional | Identification of a device message pair.<br>If Device MessageClass.<br><br>**Constraints**: *Pattern*: `^.{1,10}$` |
| `saleID` | `string` | Required | Identification of a Sale System or a Sale Terminal for the Sale to POI protocol.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `pOIID` | `string` | Required | Identification of a POI System or a POI Terminal for the Sale to POI protocol.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import {
  MessageCategory1Enum,
  MessageClass1Enum,
  MessageHeader,
  MessageType1Enum,
} from 'adyen';

const messageHeader: MessageHeader = {
  messageClass: MessageClass1Enum.Service,
  messageCategory: MessageCategory1Enum.Print,
  messageType: MessageType1Enum.Notification,
  saleID: 'SaleID6',
  pOIID: 'POIID2',
  protocolVersion: 'ProtocolVersion0',
  serviceID: 'ServiceID4',
  deviceID: 'DeviceID6',
};
```

