
# Stored Value Transaction Type 1 Enum

Identification of operation to proceed on the stored value account or the stored value card.
Possible values:

* **Activate**
* **Duplicate**
* **Load**
* **Reserve**
* **Reverse**
* **Unload**

## Enumeration

`StoredValueTransactionType1Enum`

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
import { StoredValueTransactionType1Enum } from 'adyen';

const storedValueTransactionType1 = StoredValueTransactionType1Enum.Load;
```

