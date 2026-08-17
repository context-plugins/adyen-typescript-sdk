
# Creation Result Code Enum

Notification message. It informs about the outcome of the operation. Possible values:

* CREATED
* ALREADY_EXISTS
* ERROR

## Enumeration

`CreationResultCodeEnum`

## Fields

| Name |
|  --- |
| `ALREADYEXISTS` |
| `CREATED` |
| `ERROR` |

## Example

```ts
import { CreationResultCodeEnum } from 'adyen';

const creationResultCode = CreationResultCodeEnum.ALREADYEXISTS;
```

