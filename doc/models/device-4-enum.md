
# Device 4 Enum

Logical device located on a Sale Terminal or a POI Terminal, in terms of class of information to output (display, print or store), or input (keyboard) for the Cashier or the Customer.
Possible values:

* **CashierDisplay**
* **CashierInput**
* **CustomerDisplay**
* **CustomerInput**

## Enumeration

`Device4Enum`

## Fields

| Name |
|  --- |
| `CashierDisplay` |
| `CustomerDisplay` |
| `CashierInput` |
| `CustomerInput` |

## Example

```ts
import { Device4Enum } from 'adyen';

const device4 = Device4Enum.CashierInput;
```

