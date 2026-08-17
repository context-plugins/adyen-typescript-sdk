
# Info Qualify 3 Enum

Qualification of the information to sent to an output logical device, to display or print to the Cashier or the Customer.
Copy.
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

`InfoQualify3Enum`

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
import { InfoQualify3Enum } from 'adyen';

const infoQualify3 = InfoQualify3Enum.Display;
```

