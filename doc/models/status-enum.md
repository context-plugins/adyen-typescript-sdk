
# Status Enum

Informs you if the name validation was performed. Possible values:

**performed**, **notPerformed**, **notSupported**

## Enumeration

`StatusEnum`

## Fields

| Name |
|  --- |
| `NotPerformed` |
| `NotSupported` |
| `Performed` |

## Example

```ts
import { StatusEnum } from 'adyen';

const status = StatusEnum.Performed;
```

