
# Poi Status 1

State of a POI Terminal.
If `Response.Result` is Success.

*This model accepts additional fields of type unknown.*

## Structure

`PoiStatus1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `globalStatus` | [`GlobalStatus1`](../../doc/models/global-status-1.md) | Required | - |
| `securityOkFlag` | `boolean \| undefined` | Optional | Indicates if the security module of the POI is working and usable.<br>If security module present. |
| `pedokFlag` | `boolean \| undefined` | Optional | Indicates if the PED is working and usable.<br>If PED present. |
| `cardReaderOkFlag` | `boolean \| undefined` | Optional | Indicates if the card readers are working and usable.<br>If card reader device present. |
| `printerStatus` | [`PrinterStatus1 \| undefined`](../../doc/models/printer-status-1.md) | Optional | - |
| `communicationOkFlag` | `boolean \| undefined` | Optional | Indicates if the communication infrastructure is working and usable.<br>If communication infrastructure present. |
| `fraudPreventionFlag` | `boolean \| undefined` | Optional | Indicates a suspicion of fraud by the POI System.<br>Could be set to True by the POI system to notify to the Sale system and the Cashier that a suspicion of fraud had been detected on the POI as an unexpected reboot of the POI. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GlobalStatus1, PoiStatus1, PrinterStatus1 } from 'adyenlib';

const poiStatus1: PoiStatus1 = {
  globalStatus: GlobalStatus1.Maintenance,
  securityOkFlag: false,
  pedokFlag: false,
  cardReaderOkFlag: false,
  printerStatus: PrinterStatus1.Ok,
  communicationOkFlag: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

