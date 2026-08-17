
# Character Style 1 Enum

Typographic style of the sequence of characters to display or print. Absence of this data element means the characters have normal style.
Possible values:

* **Bold**
* **Italic**
* **Normal**
* **Underline**

## Enumeration

`CharacterStyle1Enum`

## Fields

| Name |
|  --- |
| `Normal` |
| `Bold` |
| `Italic` |
| `Underline` |

## Example

```ts
import { CharacterStyle1Enum } from 'adyen';

const characterStyle1 = CharacterStyle1Enum.Italic;
```

