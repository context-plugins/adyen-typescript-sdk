
# Stored Value Transaction Type

Possible values:

* **Reserve**
* **Activate**
* **Load**
* **Unload**
* **Reverse**
* **Duplicate**

## Enumeration

`StoredValueTransactionType`

## Fields

| Name |
|  --- |
| `Reserve` |
| `Activate` |
| `Load` |
| `Unload` |
| `Reverse` |
| `Duplicate` |

## Example

```ts
import { StoredValueTransactionType } from 'adyen';

const storedValueTransactionType = StoredValueTransactionType.Reverse;
```

