
# Stored Value Transaction Type 1

Identification of operation to proceed on the stored value account or the stored value card.
Possible values:

* **Activate**
* **Duplicate**
* **Load**
* **Reserve**
* **Reverse**
* **Unload**

## Enumeration

`StoredValueTransactionType1`

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
import { StoredValueTransactionType1 } from 'adyen';

const storedValueTransactionType1 = StoredValueTransactionType1.Load;
```

