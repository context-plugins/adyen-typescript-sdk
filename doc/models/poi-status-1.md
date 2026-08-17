
# POI Status 1

State of a POI Terminal.
If `Response.Result` is Success.

## Structure

`POIStatus1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `globalStatus` | [`GlobalStatus1Enum`](../../doc/models/global-status-1-enum.md) | Required | Global status of a POI Server or POI Terminal.<br>Possible values:<br><br>* **Busy**<br>* **Maintenance**<br>* **OK**<br>* **Unreachable** |
| `securityOKFlag` | `boolean \| undefined` | Optional | Indicates if the security module of the POI is working and usable.<br>If security module present. |
| `pEDOKFlag` | `boolean \| undefined` | Optional | Indicates if the PED is working and usable.<br>If PED present. |
| `cardReaderOKFlag` | `boolean \| undefined` | Optional | Indicates if the card readers are working and usable.<br>If card reader device present. |
| `printerStatus` | [`PrinterStatus1Enum \| undefined`](../../doc/models/printer-status-1-enum.md) | Optional | Possible values:<br><br>* **NoPaper**<br>* **OK**<br>* **OutOfOrder**<br>* **PaperJam**<br>* **PaperLow** |
| `communicationOKFlag` | `boolean \| undefined` | Optional | Indicates if the communication infrastructure is working and usable.<br>If communication infrastructure present. |
| `fraudPreventionFlag` | `boolean \| undefined` | Optional | Indicates a suspicion of fraud by the POI System.<br>Could be set to True by the POI system to notify to the Sale system and the Cashier that a suspicion of fraud had been detected on the POI as an unexpected reboot of the POI. |

## Example

```ts
import { GlobalStatus1Enum, POIStatus1, PrinterStatus1Enum } from 'adyen';

const pOIStatus1: POIStatus1 = {
  globalStatus: GlobalStatus1Enum.Maintenance,
  securityOKFlag: false,
  pEDOKFlag: false,
  cardReaderOKFlag: false,
  printerStatus: PrinterStatus1Enum.OK,
  communicationOKFlag: false,
};
```

