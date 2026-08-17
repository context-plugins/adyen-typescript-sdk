
# Input Command Enum

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

`InputCommandEnum`

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
import { InputCommandEnum } from 'adyen';

const inputCommand = InputCommandEnum.DecimalString;
```

