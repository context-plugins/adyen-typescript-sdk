
# PIN Request Type Enum

Type of PIN Service.
Possible values:

* **PINVerify**
* **PINVerifyOnly**
* **PINEnter**

## Enumeration

`PINRequestTypeEnum`

## Fields

| Name |
|  --- |
| `PINVerify` |
| `PINVerifyOnly` |
| `PINEnter` |

## Example

```ts
import { PINRequestTypeEnum } from 'adyen';

const pINRequestType = PINRequestTypeEnum.PINEnter;
```

