
# Execution Result 1

The status of the payout execution.

Possible values:

- **succeeded**: The payout was sent successfully.
- **failed**: The payout could not be sent because an error occurred.
- **skipped**: The payout was not triggered as expected.

## Enumeration

`ExecutionResult1`

## Fields

| Name |
|  --- |
| `Failed` |
| `Succeeded` |
| `Skipped` |

## Example

```ts
import { ExecutionResult1 } from 'adyen';

const executionResult1 = ExecutionResult1.Skipped;
```

