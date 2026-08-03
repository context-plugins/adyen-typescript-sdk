
# Stored Value Transaction Type 2

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

`StoredValueTransactionType2`

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
import { StoredValueTransactionType2 } from 'adyenlib';

const storedValueTransactionType2 = StoredValueTransactionType2.Load;
```

