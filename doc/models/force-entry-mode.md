
# Force Entry Mode

## Enumeration

`ForceEntryMode`

## Fields

| Name |
|  --- |
| `Rfid` |
| `Keyed` |
| `Manual` |
| `File` |
| `Scanned` |
| `MagStripe` |
| `Icc` |
| `SynchronousIcc` |
| `Tapped` |
| `Contactless` |
| `CheckReader` |

## Example

```ts
import { ForceEntryMode } from 'adyen';

const forceEntryMode = ForceEntryMode.Manual;
```

