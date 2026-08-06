
# Custom Query Parameter



Documentation for accessing and setting credentials for clientKey.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| clientKey | `string` | - | `clientKey` |



**Note:** Auth credentials can be set using `clientKeyCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
import { Client } from 'adyen';

const client = new Client({
  clientKeyCredentials: {
    'clientKey': 'clientKey'
  },
});
```


