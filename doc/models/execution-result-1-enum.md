
# Execution Result 1 Enum

The status of the payout execution.

Possible values:

- **succeeded**: The payout was sent successfully.
- **failed**: The payout could not be sent because an error occurred.
- **skipped**: The payout was not triggered as expected.

## Enumeration

`ExecutionResult1Enum`

## Fields

| Name |
|  --- |
| `Failed` |
| `Succeeded` |
| `Skipped` |

## Example

```ts
import { ExecutionResult1Enum } from 'adyen';

const executionResult1 = ExecutionResult1Enum.Skipped;
```

