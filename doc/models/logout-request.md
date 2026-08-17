
# Logout Request

Empty.
Content of the Logout Request message.

## Structure

`LogoutRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `maintenanceAllowed` | `boolean \| undefined` | Optional | Indicates that the POI terminal is able to or has to go to maintenance. Sent in the Logout Request to express that after closing the session, the POI may go to maintenance.<br><br>**Default**: `false` |

## Example

```ts
import { LogoutRequest } from 'adyen';

const logoutRequest: LogoutRequest = {
  maintenanceAllowed: false,
};
```

