
# Entry Mode Enum

## Enumeration

`EntryModeEnum`

## Fields

| Name |
|  --- |
| `RFID` |
| `Keyed` |
| `Manual` |
| `File` |
| `Scanned` |
| `MagStripe` |
| `ICC` |
| `SynchronousICC` |
| `Tapped` |
| `Contactless` |
| `Mobile` |

## Example

```ts
import { EntryModeEnum } from 'adyen';

const entryMode = EntryModeEnum.SynchronousICC;
```

