
# Terminal Assignment 2

Indicates the account level to which the terminal is assigned, the [assignment status](https://docs.adyen.com/point-of-sale/automating-terminal-management/assign-terminals-api), and where the terminals is in the process of being reassigned to.

*This model accepts additional fields of type unknown.*

## Structure

`TerminalAssignment2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string` | Required | The unique identifier of the company account to which terminal is assigned. |
| `merchantId` | `string \| undefined` | Optional | The unique identifier of the merchant account to which terminal is assigned. |
| `reassignmentTarget` | [`TerminalReassignmentTarget \| undefined`](../../doc/models/terminal-reassignment-target.md) | Optional | - |
| `status` | [`Status24`](../../doc/models/status-24.md) | Required | - |
| `storeId` | `string \| undefined` | Optional | The unique identifier of the store to which terminal is assigned. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Status24, TerminalAssignment2 } from 'adyenlib';

const terminalAssignment2: TerminalAssignment2 = {
  companyId: 'companyId0',
  status: Status24.Boarded,
  merchantId: 'merchantId6',
  reassignmentTarget: {
    inventory: false,
    companyId: 'companyId4',
    merchantId: 'merchantId0',
    storeId: 'storeId8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  storeId: 'storeId4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

