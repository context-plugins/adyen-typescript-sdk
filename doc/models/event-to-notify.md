
# Event to Notify

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

`EventToNotify`

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
import { EventToNotify } from 'adyen';

const eventToNotify = EventToNotify.StopAssistance;
```

