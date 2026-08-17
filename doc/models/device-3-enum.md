
# Device 3 Enum

Logical device located on a Sale Terminal or a POI Terminal, in term of class of information to output (display, print or store), or input (keyboard) for the Cashier or the Customer.
Copy.
Possible values:

* **CashierDisplay**
* **CashierInput**
* **CustomerDisplay**
* **CustomerInput**

## Enumeration

`Device3Enum`

## Fields

| Name |
|  --- |
| `CashierDisplay` |
| `CustomerDisplay` |
| `CashierInput` |
| `CustomerInput` |

## Example

```ts
import { Device3Enum } from 'adyen';

const device3 = Device3Enum.CashierInput;
```

