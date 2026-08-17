
# Passcodes

## Structure

`Passcodes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adminMenuPin` | `string \| undefined` | Optional | The passcode for the Admin menu and the Settings menu.<br><br>**Constraints**: *Maximum Length*: `6` |
| `refundPin` | `string \| undefined` | Optional | The passcode for referenced and unreferenced refunds on standalone terminals.<br><br>**Constraints**: *Maximum Length*: `6` |
| `screenLockPin` | `string \| undefined` | Optional | The passcode to unlock the terminal screen after a timeout.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `6` |
| `txMenuPin` | `string \| undefined` | Optional | The passcode for the Transactions menu.<br><br>**Constraints**: *Maximum Length*: `6` |

## Example

```ts
import { Passcodes } from 'adyen';

const passcodes: Passcodes = {
  adminMenuPin: 'adminMenuPin0',
  refundPin: 'refundPin4',
  screenLockPin: 'screenLockPin4',
  txMenuPin: 'txMenuPin4',
};
```

