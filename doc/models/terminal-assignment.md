
# Terminal Assignment

## Structure

`TerminalAssignment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string` | Required | The unique identifier of the company account to which terminal is assigned. |
| `merchantId` | `string \| undefined` | Optional | The unique identifier of the merchant account to which terminal is assigned. |
| `reassignmentTarget` | [`TerminalReassignmentTarget2 \| undefined`](../../doc/models/terminal-reassignment-target-2.md) | Optional | Indicates where the terminal is in the process of being reassigned to. |
| `status` | [`Status21Enum`](../../doc/models/status-21-enum.md) | Required | The status of the reassignment. Possible values:<br><br>* `reassignmentInProgress`: the terminal was boarded and is now scheduled to remove the configuration. Wait for the terminal to synchronize with the Adyen platform.<br>* `deployed`: the terminal is deployed and reassigned.<br>* `inventory`: the terminal is in inventory and cannot process transactions.<br>* `boarded`: the terminal is boarded to a store, or a merchant account representing a store, and can process transactions. |
| `storeId` | `string \| undefined` | Optional | The unique identifier of the store to which terminal is assigned. |

## Example

```ts
import { Status21Enum, TerminalAssignment } from 'adyen';

const terminalAssignment: TerminalAssignment = {
  companyId: 'companyId0',
  status: Status21Enum.Boarded,
  merchantId: 'merchantId6',
  reassignmentTarget: {
    inventory: false,
    companyId: 'companyId4',
    merchantId: 'merchantId0',
    storeId: 'storeId8',
  },
  storeId: 'storeId4',
};
```

