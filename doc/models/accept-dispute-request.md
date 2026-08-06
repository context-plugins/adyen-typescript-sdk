
# Accept Dispute Request

*This model accepts additional fields of type unknown.*

## Structure

`AcceptDisputeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disputePspReference` | `string` | Required | The PSP reference assigned to the dispute. |
| `merchantAccountCode` | `string` | Required | The merchant account identifier, for which you want to process the dispute transaction. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AcceptDisputeRequest } from 'adyen';

const acceptDisputeRequest: AcceptDisputeRequest = {
  disputePspReference: 'disputePspReference2',
  merchantAccountCode: 'merchantAccountCode4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

