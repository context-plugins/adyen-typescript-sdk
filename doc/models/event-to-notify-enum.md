
# Event to Notify Enum

Event the POI notifies to the Sale System.
Possible values:

* **BeginMaintenance**
* **EndMaintenance**
* **Shutdown**
* **Initialised**
* **OutOfOrder**
* **Completed**
* **Abort**
* **SaleWakeUp**
* **SaleAdmin**
* **CustomerLanguage**
* **KeyPressed**
* **SecurityAlarm**
* **StopAssistance**
* **CardInserted**
* **CardRemoved**
* **Reject**
* **UseAnotherCardForPreauth**
* **ScanBarcodeResult**

## Enumeration

`EventToNotifyEnum`

## Fields

| Name |
|  --- |
| `BeginMaintenance` |
| `EndMaintenance` |
| `Shutdown` |
| `Initialised` |
| `OutOfOrder` |
| `Completed` |
| `Abort` |
| `SaleWakeUp` |
| `SaleAdmin` |
| `CustomerLanguage` |
| `KeyPressed` |
| `SecurityAlarm` |
| `StopAssistance` |
| `CardInserted` |
| `CardRemoved` |
| `Reject` |
| `UseAnotherCardForPreauth` |
| `ScanBarcodeResult` |

## Example

```ts
import { EventToNotifyEnum } from 'adyen';

const eventToNotify = EventToNotifyEnum.StopAssistance;
```

