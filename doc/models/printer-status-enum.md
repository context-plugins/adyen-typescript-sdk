
# Printer Status Enum

Indicates if the printer is working and usable.
Possible values:

* **OK**
* **PaperLow**
* **NoPaper**
* **PaperJam**
* **OutOfOrder**

## Enumeration

`PrinterStatusEnum`

## Fields

| Name |
|  --- |
| `OK` |
| `PaperLow` |
| `NoPaper` |
| `PaperJam` |
| `OutOfOrder` |

## Example

```ts
import { PrinterStatusEnum } from 'adyen';

const printerStatus = PrinterStatusEnum.PaperLow;
```

