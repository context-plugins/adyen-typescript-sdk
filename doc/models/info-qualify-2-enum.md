
# Info Qualify 2 Enum

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

`InfoQualify2Enum`

## Fields

| Name |
|  --- |
| `Status` |
| `Error` |
| `Display` |
| `Sound` |
| `Input` |
| `POIReplication` |
| `CustomerAssistance` |
| `Receipt` |
| `Document` |
| `Voucher` |

## Example

```ts
import { InfoQualify2Enum } from 'adyen';

const infoQualify2 = InfoQualify2Enum.Status;
```

