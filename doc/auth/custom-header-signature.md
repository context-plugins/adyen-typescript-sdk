
# Custom Header Signature



Documentation for accessing and setting credentials for ApiKeyAuth.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| X-API-Key | `string` | - | `xApiKey` |



**Note:** Auth credentials can be set using `apiKeyAuthCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
import { Client } from 'adyen';

const client = new Client({
  apiKeyAuthCredentials: {
    'X-API-Key': 'X-API-Key'
  },
});
```


