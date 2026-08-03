
# Create Merchant Api Credential Request

*This model accepts additional fields of type unknown.*

## Structure

`CreateMerchantApiCredentialRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowedOrigins` | `string[] \| undefined` | Optional | The list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the new API credential. |
| `description` | `string \| undefined` | Optional | Description of the API credential. |
| `roles` | `string[] \| undefined` | Optional | List of [roles](https://docs.adyen.com/development-resources/api-credentials#roles-1) for the API credential. Only roles assigned to 'ws@Company.<CompanyName>' can be assigned to other API credentials. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateMerchantApiCredentialRequest } from 'adyenlib';

const createMerchantApiCredentialRequest: CreateMerchantApiCredentialRequest = {
  allowedOrigins: [
    'allowedOrigins2',
    'allowedOrigins1',
    'allowedOrigins0'
  ],
  description: 'description4',
  roles: [
    'roles2',
    'roles3',
    'roles4'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

