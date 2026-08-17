
# Communication Format Enum

Format or protocol for receiving webhooks. Possible values:

* **soap**
* **http**
* **json**

## Enumeration

`CommunicationFormatEnum`

## Fields

| Name |
|  --- |
| `Http` |
| `Json` |
| `Soap` |

## Example

```ts
import { CommunicationFormatEnum } from 'adyen';

const communicationFormat = CommunicationFormatEnum.Http;
```

