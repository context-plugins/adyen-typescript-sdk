
# Type 59

The type of error.

Possible values:

* **invalidInput**
* **dataMissing**
* **pendingStatus**
* **rejected**
* **dataReview**

## Enumeration

`Type59`

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
import { Type59 } from 'adyen';

const type59 = Type59.InvalidInput;
```

