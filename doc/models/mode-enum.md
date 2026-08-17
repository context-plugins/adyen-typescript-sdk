
# Mode Enum

Indicates the type of front end integration. Possible values:

* **embedded** (default): Drop-in or Components integration
* **hosted**: Hosted Checkout integration

## Enumeration

`ModeEnum`

## Fields

| Name |
|  --- |
| `Embedded` |
| `Hosted` |

## Example

```ts
import { ModeEnum } from 'adyen';

const mode = ModeEnum.Embedded;
```

