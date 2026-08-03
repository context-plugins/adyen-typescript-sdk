
# Input Command

Possible values:

* **GetAnyKey**
* **GetConfirmation**
* **SiteManager**
* **TextString**
* **DigitString**
* **DecimalString**
* **GetFunctionKey**
* **GetMenuEntry**
* **Password**

## Enumeration

`InputCommand`

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
import { InputCommand } from 'adyenlib';

const inputCommand = InputCommand.DecimalString;
```

