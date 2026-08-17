
# Response Mode 1 Enum

Message response awaited by the initiator of the Request. Allows various types and synchronisation of requests for Print or Sound.
Possible values:

* **Immediate**
* **NotRequired**
* **PrintEnd**
* **SoundEnd**

## Enumeration

`ResponseMode1Enum`

## Fields

| Name |
|  --- |
| `NotRequired` |
| `Immediate` |
| `PrintEnd` |
| `SoundEnd` |

## Example

```ts
import { ResponseMode1Enum } from 'adyen';

const responseMode1 = ResponseMode1Enum.NotRequired;
```

