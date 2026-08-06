
# Type 90

The type of tracking event.

Possible values:

- **internalReview**: the transfer was flagged because it does not comply with Adyen's risk policy.

## Enumeration

`Type90`

## Fields

| Name |
|  --- |
| `InternalReview` |

## Example

```ts
import { Type90 } from 'adyen';

const type90 = Type90.InternalReview;
```

