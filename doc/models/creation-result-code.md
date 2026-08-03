
# Creation Result Code

Notification message. It informs about the outcome of the operation. Possible values:

* CREATED
* ALREADY_EXISTS
* ERROR

## Enumeration

`CreationResultCode`

## Fields

| Name |
|  --- |
| `AlreadyExists` |
| `Created` |
| `Error` |

## Example

```ts
import { CreationResultCode } from 'adyenlib';

const creationResultCode = CreationResultCode.AlreadyExists;
```

