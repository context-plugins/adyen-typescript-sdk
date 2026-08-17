
# Transaction ID Type

Identification of a transaction for the Sale System or the POI System.

## Structure

`TransactionIDType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionID` | `string` | Required | Unique identification of a transaction to identify the transaction on<br>the Sale System (e.g. ticket number), or the POI System.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `timeStamp` | `string` | Required | Date and time of a transaction for the Sale System, the POI System or the Acquirer.<br>Ensures the uniqueness of a transaction and indicates the time when the event<br>occurs in the EventNotification message. |

## Example

```ts
import { TransactionIDType } from 'adyen';

const transactionIDType: TransactionIDType = {
  transactionID: 'TransactionID6',
  timeStamp: '2016-03-13T12:52:32.123Z',
};
```

