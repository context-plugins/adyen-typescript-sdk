
# Pan Entry Mode Enum

Indicates the method used for entering the PAN to initiate a transaction.

Possible values: **manual**, **chip**, **magstripe**, **contactless**, **cof**, **ecommerce**, **token**.

## Enumeration

`PanEntryModeEnum`

## Fields

| Name |
|  --- |
| `Chip` |
| `Cof` |
| `Contactless` |
| `Ecommerce` |
| `Magstripe` |
| `Manual` |
| `Token` |

## Example

```ts
import { PanEntryModeEnum } from 'adyen';

const panEntryMode = PanEntryModeEnum.Token;
```

