
# Create Company Api Credential Request

*This model accepts additional fields of type unknown.*

## Structure

`CreateCompanyApiCredentialRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowedOrigins` | `string[] \| undefined` | Optional | List of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the new API credential. |
| `associatedMerchantAccounts` | `string[] \| undefined` | Optional | List of merchant accounts that the API credential has access to. |
| `description` | `string \| undefined` | Optional | Description of the API credential. |
| `roles` | `string[] \| undefined` | Optional | List of [roles](https://docs.adyen.com/development-resources/api-credentials#roles-1) for the API credential. Only roles assigned to 'ws@Company.<CompanyName>' can be assigned to other API credentials. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateCompanyApiCredentialRequest } from 'adyen';

const createCompanyApiCredentialRequest: CreateCompanyApiCredentialRequest = {
  allowedOrigins: [
    'allowedOrigins8',
    'allowedOrigins7'
  ],
  associatedMerchantAccounts: [
    'associatedMerchantAccounts8'
  ],
  description: 'description8',
  roles: [
    'roles2',
    'roles1',
    'roles0'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

