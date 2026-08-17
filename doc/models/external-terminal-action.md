
# External Terminal Action

## Structure

`ExternalTerminalAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actionType` | `string \| undefined` | Optional | The type of terminal action: **InstallAndroidApp**, **UninstallAndroidApp**, **InstallAndroidCertificate**, or **UninstallAndroidCertificate**. |
| `config` | `string \| undefined` | Optional | Technical information about the terminal action. |
| `confirmedAt` | `string \| undefined` | Optional | The date and time when the action was carried out. |
| `id` | `string \| undefined` | Optional | The unique ID of the terminal action. |
| `result` | `string \| undefined` | Optional | The result message for the action. |
| `scheduledAt` | `string \| undefined` | Optional | The date and time when the action was scheduled to happen. |
| `status` | `string \| undefined` | Optional | The status of the terminal action: **pending**, **successful**, **failed**, **cancelled**, or **tryLater**. |
| `terminalId` | `string \| undefined` | Optional | The unique ID of the terminal that the action applies to. |

## Example

```ts
import { ExternalTerminalAction } from 'adyen';

const externalTerminalAction: ExternalTerminalAction = {
  actionType: 'actionType4',
  config: 'config0',
  confirmedAt: '2016-03-13T12:52:32.123Z',
  id: 'id4',
  result: 'result2',
};
```

