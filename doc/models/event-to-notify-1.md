
# Event to Notify 1

Event the POI notifies to the Sale System.
Possible values:

* **Abort**
* **BeginMaintenance**
* **CardInserted**
* **CardRemoved**
* **Completed**
* **CustomerLanguage**
* **EndMaintenance**
* **Initialised**
* **KeyPressed**
* **OutOfOrder**
* **Reject**
* **SaleAdmin**
* **SaleWakeUp**
* **ScanBarcodeResult**
* **SecurityAlarm**
* **Shutdown**
* **StopAssistance**
* **UseAnotherCardForPreauth**

## Enumeration

`EventToNotify1`

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
import { EventToNotify1 } from 'adyenlib';

const eventToNotify1 = EventToNotify1.KeyPressed;
```

