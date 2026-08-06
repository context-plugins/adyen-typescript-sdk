
# Communication Format

Format or protocol for receiving webhooks. Possible values:

* **soap**
* **http**
* **json**

## Enumeration

`CommunicationFormat`

## Fields

| Name |
|  --- |
| `Http` |
| `Json` |
| `Soap` |

## Example

```ts
import { CommunicationFormat } from 'adyen';

const communicationFormat = CommunicationFormat.Http;
```

