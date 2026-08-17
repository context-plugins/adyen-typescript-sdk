
# Type 512 Enum

The type of error.

Possible values:

* **invalidInput**
* **dataMissing**
* **pendingStatus**
* **rejected**
* **dataReview**

## Enumeration

`Type512Enum`

## Fields

| Name |
|  --- |
| `DataMissing` |
| `DataReview` |
| `InvalidInput` |
| `PendingStatus` |
| `Rejected` |

## Example

```ts
import { Type512Enum } from 'adyen';

const type512 = Type512Enum.Rejected;
```

