
# Pan Entry Mode

Indicates the method used for entering the PAN to initiate a transaction.

Possible values: **manual**, **chip**, **magstripe**, **contactless**, **cof**, **ecommerce**, **token**.

## Enumeration

`PanEntryMode`

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
import { PanEntryMode } from 'adyen';

const panEntryMode = PanEntryMode.Token;
```

