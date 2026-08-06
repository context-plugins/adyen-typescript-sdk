
# Info Qualify 1

Qualification of the information to sent to an output logical device, to display or print to the Cashier or the Customer. Allows the manager of the device, Sale or POI Terminal, to send the information to a particular physical device or to present the information accordingly.
Possible values:

* **CustomerAssistance**
* **Display**
* **Document**
* **Error**
* **Input**
* **POIReplication**
* **Receipt**
* **Sound**
* **Status**
* **Voucher**

## Enumeration

`InfoQualify1`

## Fields

| Name |
|  --- |
| `Status` |
| `Error` |
| `Display` |
| `Sound` |
| `Input` |
| `PoiReplication` |
| `CustomerAssistance` |
| `Receipt` |
| `Document` |
| `Voucher` |

## Example

```ts
import { InfoQualify1 } from 'adyen';

const infoQualify1 = InfoQualify1.CustomerAssistance;
```

