
# Input Command 1 Enum

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

`InputCommand1Enum`

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
import { InputCommand1Enum } from 'adyen';

const inputCommand1 = InputCommand1Enum.GetMenuEntry;
```

