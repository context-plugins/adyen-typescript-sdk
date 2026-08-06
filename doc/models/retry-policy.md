
# Retry Policy

When set to true, you can retry for failed recurring payments. The default value is true.

## Enumeration

`RetryPolicy`

## Fields

| Name |
|  --- |
| `True` |
| `False` |

## Example

```ts
import { RetryPolicy } from 'adyen';

const retryPolicy = RetryPolicy.True;
```

