
# Stored Value Transaction Type 2 Enum

Identification of operation to proceed on the stored value account or the stored value card.
Copy.
Possible values:

* **Activate**
* **Duplicate**
* **Load**
* **Reserve**
* **Reverse**
* **Unload**

## Enumeration

`StoredValueTransactionType2Enum`

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
import { StoredValueTransactionType2Enum } from 'adyen';

const storedValueTransactionType2 = StoredValueTransactionType2Enum.Load;
```

