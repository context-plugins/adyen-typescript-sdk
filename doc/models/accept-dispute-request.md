
# Accept Dispute Request

## Structure

`AcceptDisputeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputePspReference` | `string` | Required | The PSP reference assigned to the dispute. |
| `merchantAccountCode` | `string` | Required | The merchant account identifier, for which you want to process the dispute transaction. |

## Example

```ts
import { AcceptDisputeRequest } from 'adyen';

const acceptDisputeRequest: AcceptDisputeRequest = {
  disputePspReference: 'disputePspReference2',
  merchantAccountCode: 'merchantAccountCode4',
};
```

