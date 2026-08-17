
# Defense Reasons Request

## Structure

`DefenseReasonsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputePspReference` | `string` | Required | The PSP reference assigned to the dispute. |
| `merchantAccountCode` | `string` | Required | The merchant account identifier, for which you want to process the dispute transaction. |

## Example

```ts
import { DefenseReasonsRequest } from 'adyen';

const defenseReasonsRequest: DefenseReasonsRequest = {
  disputePspReference: 'disputePspReference8',
  merchantAccountCode: 'merchantAccountCode0',
};
```

