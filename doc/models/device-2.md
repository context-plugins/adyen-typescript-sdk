
# Device 2

Logical device located on a Sale Terminal or a POI Terminal, regarding the class of information to output (display, print or store), or input (keyboard) for the Cashier or the Customer.
Possible values:

* **CashierDisplay**
* **CashierInput**
* **CustomerDisplay**
* **CustomerInput**

## Enumeration

`Device2`

## Fields

| Name |
|  --- |
| `CashierDisplay` |
| `CustomerDisplay` |
| `CashierInput` |
| `CustomerInput` |

## Example

```ts
import { Device2 } from 'adyenlib';

const device2 = Device2.CashierInput;
```

