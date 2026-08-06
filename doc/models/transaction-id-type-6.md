
# Transaction Id Type 6

Identification of the Transaction for the Acquirer.
If provided by the Acquirer.

*This model accepts additional fields of type unknown.*

## Structure

`TransactionIdType6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `string` | Required | Unique identification of a transaction to identify the transaction on<br>the Sale System (e.g. ticket number), or the POI System.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `timeStamp` | `string` | Required | Date and time of a transaction for the Sale System, the POI System or the Acquirer.<br>Ensures the uniqueness of a transaction and indicates the time when the event<br>occurs in the EventNotification message. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TransactionIdType6 } from 'adyen';

const transactionIdType6: TransactionIdType6 = {
  transactionId: 'TransactionID0',
  timeStamp: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

