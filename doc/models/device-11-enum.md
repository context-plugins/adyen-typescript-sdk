
# Device 11 Enum

Logical device located on a Sale Terminal or a POI Terminal, in terms of class of information to output (display, print, or store), or input (keyboard) for the Cashier or the Customer.
Possible values:

* **CashierDisplay**
* **CashierInput**
* **CustomerDisplay**
* **CustomerInput**

## Enumeration

`Device11Enum`

## Fields

| Name |
|  --- |
| `CashierDisplay` |
| `CustomerDisplay` |
| `CashierInput` |
| `CustomerInput` |

## Example

```ts
import { Device11Enum } from 'adyen';

const device11 = Device11Enum.CashierInput;
```

