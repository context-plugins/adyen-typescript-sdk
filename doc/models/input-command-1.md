
# Input Command 1

Type of requested input. Can be: **GetConfirmation**, **TextString**, **DigitString**, **DecimalString** or **GetMenuEntry**.
Possible values:

* **DecimalString**
* **DigitString**
* **GetAnyKey**
* **GetConfirmation**
* **GetFunctionKey**
* **GetMenuEntry**
* **Password**
* **SiteManager**
* **TextString**

## Enumeration

`InputCommand1`

## Fields

| Name |
|  --- |
| `GetAnyKey` |
| `GetConfirmation` |
| `SiteManager` |
| `TextString` |
| `DigitString` |
| `DecimalString` |
| `GetFunctionKey` |
| `GetMenuEntry` |
| `Password` |

## Example

```ts
import { InputCommand1 } from 'adyen';

const inputCommand1 = InputCommand1.GetMenuEntry;
```

