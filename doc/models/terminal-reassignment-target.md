
# Terminal Reassignment Target

*This model accepts additional fields of type unknown.*

## Structure

`TerminalReassignmentTarget`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string \| undefined` | Optional | The unique identifier of the company account to which the terminal is reassigned. |
| `inventory` | `boolean` | Required | Indicates if the terminal is reassigned to the inventory of the merchant account.<br><br>- If **true**, the terminal is in the inventory of the merchant account and cannot process transactions.<br>- If **false**, the terminal is reassigned directly to the merchant account and can process transactions. |
| `merchantId` | `string \| undefined` | Optional | The unique identifier of the merchant account to which the terminal is reassigned. |
| `storeId` | `string \| undefined` | Optional | The unique identifier of the store to which the terminal is reassigned. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TerminalReassignmentTarget } from 'adyenlib';

const terminalReassignmentTarget: TerminalReassignmentTarget = {
  inventory: false,
  companyId: 'companyId4',
  merchantId: 'merchantId0',
  storeId: 'storeId8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

