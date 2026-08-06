
# Response Mode 1

Message response awaited by the initiator of the Request. Allows various types and synchronisation of requests for Print or Sound.
Possible values:

* **Immediate**
* **NotRequired**
* **PrintEnd**
* **SoundEnd**

## Enumeration

`ResponseMode1`

## Fields

| Name |
|  --- |
| `NotRequired` |
| `Immediate` |
| `PrintEnd` |
| `SoundEnd` |

## Example

```ts
import { ResponseMode1 } from 'adyen';

const responseMode1 = ResponseMode1.NotRequired;
```

