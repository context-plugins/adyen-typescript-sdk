
# Logout Request 3

*This model accepts additional fields of type unknown.*

## Structure

`LogoutRequest3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `maintenanceAllowed` | `boolean \| undefined` | Optional | Indicates that the POI terminal is able to or has to go to maintenance. Sent in the Logout Request to express that after closing the session, the POI may go to maintenance.<br><br>**Default**: `false` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { LogoutRequest3 } from 'adyenlib';

const logoutRequest3: LogoutRequest3 = {
  maintenanceAllowed: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

