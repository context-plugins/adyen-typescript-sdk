
# Code Enum

The code for the status of the grant. Possible values:

- **Pending**
- **Active**
- **Repaid**
- **WrittenOff**
- **Failed**
- **Revoked**
- **Requested**
- **Reviewing**
- **Approved**
- **Rejected**
- **Cancelled**

## Enumeration

`CodeEnum`

## Fields

| Name |
|  --- |
| `Pending` |
| `Active` |
| `Repaid` |
| `WrittenOff` |
| `Failed` |
| `Revoked` |
| `Requested` |
| `Reviewing` |
| `Approved` |
| `Rejected` |
| `Cancelled` |

## Example

```ts
import { CodeEnum } from 'adyen';

const code = CodeEnum.Cancelled;
```

