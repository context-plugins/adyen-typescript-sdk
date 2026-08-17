
# Device 2 Enum

Logical device located on a Sale Terminal or a POI Terminal, regarding the class of information to output (display, print or store), or input (keyboard) for the Cashier or the Customer.
Possible values:

* **CashierDisplay**
* **CashierInput**
* **CustomerDisplay**
* **CustomerInput**

## Enumeration

`Device2Enum`

## Fields

| Name |
|  --- |
| `CashierDisplay` |
| `CustomerDisplay` |
| `CashierInput` |
| `CustomerInput` |

## Example

```ts
import { Device2Enum } from 'adyen';

const device2 = Device2Enum.CashierInput;
```

