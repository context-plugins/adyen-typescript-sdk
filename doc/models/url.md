
# Url

## Structure

`Url`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `encrypted` | `boolean \| undefined` | Optional | Indicates if the message sent to this URL should be encrypted. |
| `password` | `string \| undefined` | Optional | The password for authentication of the notifications. |
| `url` | `string \| undefined` | Optional | The URL in the format: http(s)://domain.com. |
| `username` | `string \| undefined` | Optional | The username for authentication of the notifications. |

## Example

```ts
import { Url } from 'adyen';

const url: Url = {
  encrypted: false,
  password: 'password8',
  url: 'url8',
  username: 'username6',
};
```

