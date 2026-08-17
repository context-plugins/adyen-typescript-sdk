
# Logout Request 2

Content of the Logout Request message.

## Structure

`LogoutRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `maintenanceAllowed` | `boolean \| undefined` | Optional | Indicates that the POI terminal is able to or has to go to maintenance. Sent in the Logout Request to express that after closing the session, the POI may go to maintenance.<br><br>**Default**: `false` |

## Example

```ts
import { LogoutRequest2 } from 'adyen';

const logoutRequest2: LogoutRequest2 = {
  maintenanceAllowed: false,
};
```

