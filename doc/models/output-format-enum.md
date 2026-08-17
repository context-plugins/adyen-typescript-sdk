
# Output Format Enum

Format of the content to display or print. Display or print device function.
Possible values:

* **MessageRef**
* **Text**
* **XHTML**
* **BarCode**

## Enumeration

`OutputFormatEnum`

## Fields

| Name |
|  --- |
| `MessageRef` |
| `Text` |
| `XHTML` |
| `BarCode` |

## Example

```ts
import { OutputFormatEnum } from 'adyen';

const outputFormat = OutputFormatEnum.XHTML;
```

