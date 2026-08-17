
# Status 31 Enum

On a terminal that supports 3G or 4G connectivity, indicates the status of the primary SIM card in the terminal.

## Enumeration

`Status31Enum`

## Fields

| Name |
|  --- |
| `Activated` |
| `Deactivated` |
| `Deprecated` |
| `Inventory` |
| `ReadyForActivation` |

## Example

```ts
import { Status31Enum } from 'adyen';

const status31 = Status31Enum.ReadyForActivation;
```

