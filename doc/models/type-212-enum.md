
# Type 212 Enum

The type of error.

Possible values:

* **invalidInput**
* **dataMissing**
* **pendingStatus**
* **dataReview**

## Enumeration

`Type212Enum`

## Fields

| Name |
|  --- |
| `DataMissing` |
| `DataReview` |
| `InvalidInput` |
| `PendingStatus` |

## Example

```ts
import { Type212Enum } from 'adyen';

const type212 = Type212Enum.DataMissing;
```

