
# Status 41

The status of the balance account. Payment instruments linked to the balance account can only be used if the balance account status is **active**.

Possible values: **active**, **closed**, **suspended**.

## Enumeration

`Status41`

## Fields

| Name |
|  --- |
| `Active` |
| `Closed` |
| `Inactive` |
| `Suspended` |

## Example

```ts
import { Status41 } from 'adyen';

const status41 = Status41.Active;
```

