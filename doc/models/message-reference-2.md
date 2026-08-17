
# Message Reference 2

Identification of a previous POI transaction.
Present if it contains any data.

## Structure

`MessageReference2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageCategory` | [`MessageCategory2Enum \| undefined`](../../doc/models/message-category-2-enum.md) | Optional | Category of message.<br>CardAcquisition, Display, Input, Loyalty, Payment, Print, CardReaderInit, CardReaderPowerOff.<br>Possible values:<br><br>* **Abort**<br>* **Admin**<br>* **BalanceInquiry**<br>* **Batch**<br>* **CardAcquisition**<br>* **CardReaderInit**<br>* **CardReaderPowerOff**<br>* **Diagnosis**<br>* **Display**<br>* **EnableService**<br>* **Event**<br>* **GetTotals**<br>* **Input**<br>* **InputUpdate**<br>* **Login**<br>* **Logout**<br>* **Loyalty**<br>* **None**<br>* **PIN**<br>* **Payment**<br>* **Print**<br>* **Reconciliation**<br>* **Reversal**<br>* **Sound**<br>* **StoredValue**<br>* **TransactionStatus**<br>* **Transmit** |
| `serviceID` | `string \| undefined` | Optional | Identification of a message pair, which processes a transaction.<br><br>**Constraints**: *Pattern*: `^.{1,10}$` |
| `deviceID` | `string \| undefined` | Optional | Identification of a device message pair.<br><br>**Constraints**: *Pattern*: `^.{1,10}$` |
| `saleID` | `string \| undefined` | Optional | Identification of a Sale System or a Sale Terminal for the Sale to POI protocol.<br>default MessageHeader.SaleID.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `pOIID` | `string \| undefined` | Optional | Identification of a POI System or a POI Terminal for the Sale to POI protocol.<br>Default `MessageHeader.POIID`.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { MessageCategory2Enum, MessageReference2 } from 'adyen';

const messageReference2: MessageReference2 = {
  messageCategory: MessageCategory2Enum.EnableService,
  serviceID: 'ServiceID6',
  deviceID: 'DeviceID8',
  saleID: 'SaleID8',
  pOIID: 'POIID4',
};
```

