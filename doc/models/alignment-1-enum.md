
# Alignment 1 Enum

Alignment of the text string on the display line or print line. Absence of this data element means the characters have normal alignment.
Possible values:

* **Centred**
* **Justified**
* **Left**
* **Right**

## Enumeration

`Alignment1Enum`

## Fields

| Name |
|  --- |
| `Left` |
| `Right` |
| `Centred` |
| `Justified` |

## Example

```ts
import { Alignment1Enum } from 'adyen';

const alignment1 = Alignment1Enum.Left;
```

