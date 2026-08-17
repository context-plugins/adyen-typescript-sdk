
# Defend Dispute Request

## Structure

`DefendDisputeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defenseReasonCode` | `string` | Required | The defense reason code that was selected to defend this dispute. |
| `disputePspReference` | `string` | Required | The PSP reference assigned to the dispute. |
| `merchantAccountCode` | `string` | Required | The merchant account identifier, for which you want to process the dispute transaction. |

## Example

```ts
import { DefendDisputeRequest } from 'adyen';

const defendDisputeRequest: DefendDisputeRequest = {
  defenseReasonCode: 'defenseReasonCode2',
  disputePspReference: 'disputePspReference0',
  merchantAccountCode: 'merchantAccountCode2',
};
```

