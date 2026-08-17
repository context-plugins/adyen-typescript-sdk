
# Message Type 1 Enum

Type of message of the Sale to POI protocol.
Possible values:

* **Notification**
* **Request**
* **Response**

## Enumeration

`MessageType1Enum`

## Fields

| Name |
|  --- |
| `Request` |
| `Response` |
| `Notification` |

## Example

```ts
import { MessageType1Enum } from 'adyen';

const messageType1 = MessageType1Enum.Notification;
```

