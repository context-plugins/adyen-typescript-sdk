
# Create Api Credential Response

*This model accepts additional fields of type unknown.*

## Structure

`CreateApiCredentialResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`ApiCredentialLinks \| undefined`](../../doc/models/api-credential-links.md) | Optional | - |
| `active` | `boolean` | Required | Indicates if the API credential is enabled. Must be set to **true** to use the credential in your integration. |
| `allowedIpAddresses` | `string[]` | Required | List of IP addresses from which your client can make requests.<br><br>If the list is empty, we allow requests from any IP.<br>If the list is not empty and we get a request from an IP which is not on the list, you get a security error. |
| `allowedOrigins` | [`AllowedOrigin[] \| undefined`](../../doc/models/allowed-origin.md) | Optional | List containing the [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) linked to the API credential. |
| `apiKey` | `string` | Required | The API key for the API credential that was created. |
| `clientKey` | `string` | Required | Public key used for [client-side authentication](https://docs.adyen.com/development-resources/client-side-authentication). The client key is required for Drop-in and Components integrations. |
| `description` | `string \| undefined` | Optional | Description of the API credential.<br><br>**Constraints**: *Maximum Length*: `50` |
| `id` | `string` | Required | Unique identifier of the API credential. |
| `password` | `string` | Required | The password for the API credential that was created. |
| `roles` | `string[]` | Required | List of [roles](https://docs.adyen.com/development-resources/api-credentials#roles-1) for the API credential. |
| `subjectDn` | `string \| undefined` | Optional | The subject DN of the certificate issued by Adyen. |
| `username` | `string` | Required | The name of the [API credential](https://docs.adyen.com/development-resources/api-credentials), for example **ws@Company.TestCompany**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateApiCredentialResponse } from 'adyenlib';

const createApiCredentialResponse: CreateApiCredentialResponse = {
  active: false,
  allowedIpAddresses: [
    'allowedIpAddresses3',
    'allowedIpAddresses4'
  ],
  apiKey: 'apiKey2',
  clientKey: 'clientKey4',
  id: 'id2',
  password: 'password6',
  roles: [
    'roles4',
    'roles5'
  ],
  username: 'username8',
  links: {
    self: {
      href: 'href0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    allowedOrigins: {
      href: 'href6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    company: {
      href: 'href2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    generateApiKey: {
      href: 'href6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    generateClientKey: {
      href: 'href4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    merchant: {
      href: 'href6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  allowedOrigins: [
    {
      domain: 'domain0',
      links: {
        self: {
          href: 'href0',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      id: 'id4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      domain: 'domain0',
      links: {
        self: {
          href: 'href0',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      id: 'id4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  description: 'description8',
  subjectDn: 'subjectDN2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

