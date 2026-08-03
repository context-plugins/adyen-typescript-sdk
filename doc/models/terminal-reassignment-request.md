
# Terminal Reassignment Request

*This model accepts additional fields of type unknown.*

## Structure

`TerminalReassignmentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string \| undefined` | Optional | The unique identifier of the company account to which the terminal is reassigned. |
| `inventory` | `boolean \| undefined` | Optional | Must be specified when reassigning terminals to a merchant account:<br><br>- If set to **true**, reassigns terminals to the inventory of the merchant account and the terminals cannot process transactions.<br><br>- If set to **false**, reassigns terminals directly to the merchant account and the terminals can process transactions. |
| `merchantId` | `string \| undefined` | Optional | The unique identifier of the merchant account to which the terminal is reassigned. When reassigning terminals to a merchant account, you must specify the `inventory` field. |
| `storeId` | `string \| undefined` | Optional | The unique identifier of the store to which the terminal is reassigned. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TerminalReassignmentRequest } from 'adyenlib';

const terminalReassignmentRequest: TerminalReassignmentRequest = {
  companyId: 'companyId8',
  inventory: false,
  merchantId: 'merchantId4',
  storeId: 'storeId8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

