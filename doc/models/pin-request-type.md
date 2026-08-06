
# Pin Request Type

Type of PIN Service.
Possible values:

* **PINVerify**
* **PINVerifyOnly**
* **PINEnter**

## Enumeration

`PinRequestType`

## Fields

| Name |
|  --- |
| `PinVerify` |
| `PinVerifyOnly` |
| `PinEnter` |

## Example

```ts
import { PinRequestType } from 'adyen';

const pinRequestType = PinRequestType.PinVerify;
```

