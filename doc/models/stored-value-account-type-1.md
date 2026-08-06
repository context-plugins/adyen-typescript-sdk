
# Stored Value Account Type 1

Type of stored value account. Allows the distinction of the stored value instrument to access the stored value account.
Possible values:

* **GiftCard**
* **Other**
* **PhoneCard**

## Enumeration

`StoredValueAccountType1`

## Fields

| Name |
|  --- |
| `GiftCard` |
| `PhoneCard` |
| `Other` |

## Example

```ts
import { StoredValueAccountType1 } from 'adyen';

const storedValueAccountType1 = StoredValueAccountType1.Other;
```

