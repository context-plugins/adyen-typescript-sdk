
# Track Format

Magnetic track or magnetic ink characters line.
Possible values:

* **ISO**
* **JIS-I**
* **JIS-II**
* **AAMVA**
* **CMC-7**
* **E-13B**

## Enumeration

`TrackFormat`

## Fields

| Name |
|  --- |
| `Iso` |
| `Jisi` |
| `Jisii` |
| `Aamva` |
| `Cmc7` |
| `E13B` |

## Example

```ts
import { TrackFormat } from 'adyen';

const trackFormat = TrackFormat.Iso;
```

