
# Update Merchant Api Credential Request

## Structure

`UpdateMerchantApiCredentialRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `active` | `boolean \| undefined` | Optional | Indicates if the API credential is enabled. |
| `allowedOrigins` | `string[] \| undefined` | Optional | The new list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the API credential. |
| `description` | `string \| undefined` | Optional | Description of the API credential. |
| `roles` | `string[] \| undefined` | Optional | List of [roles](https://docs.adyen.com/development-resources/api-credentials#roles-1) for the API credential. Only roles assigned to 'ws@Company.<CompanyName>' can be assigned to other API credentials. |
| `subjectDN` | `string \| undefined` | Optional | The subject DN of the certificate issued by Adyen. |

## Example

```ts
import { UpdateMerchantApiCredentialRequest } from 'adyen';

const updateMerchantApiCredentialRequest: UpdateMerchantApiCredentialRequest = {
  active: false,
  allowedOrigins: [
    'allowedOrigins4',
    'allowedOrigins5'
  ],
  description: 'description0',
  roles: [
    'roles8',
    'roles7'
  ],
  subjectDN: 'subjectDN0',
};
```

