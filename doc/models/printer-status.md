
# Printer Status

Indicates if the printer is working and usable.
Possible values:

* **OK**
* **PaperLow**
* **NoPaper**
* **PaperJam**
* **OutOfOrder**

## Enumeration

`PrinterStatus`

## Fields

| Name |
|  --- |
| `Ok` |
| `PaperLow` |
| `NoPaper` |
| `PaperJam` |
| `OutOfOrder` |

## Example

```ts
import { PrinterStatus } from 'adyenlib';

const printerStatus = PrinterStatus.PaperLow;
```

