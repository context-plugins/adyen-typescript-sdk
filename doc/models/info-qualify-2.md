
# Info Qualify 2

Qualification of the information to send to an output logical device, to display or print to the Cashier or the Customer.
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

`InfoQualify2`

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
import { InfoQualify2 } from 'adyenlib';

const infoQualify2 = InfoQualify2.Status;
```

