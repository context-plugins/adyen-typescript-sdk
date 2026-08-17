
# Company Api Credential

## Structure

`CompanyApiCredential`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`ApiCredentialLinks2 \| undefined`](../../doc/models/api-credential-links-2.md) | Optional | References to resources linked to the API credential. |
| `active` | `boolean` | Required | Indicates if the API credential is enabled. Must be set to **true** to use the credential in your integration. |
| `allowedIpAddresses` | `string[]` | Required | List of IP addresses from which your client can make requests.<br><br>If the list is empty, we allow requests from any IP.<br>If the list is not empty and we get a request from an IP which is not on the list, you get a security error. |
| `allowedOrigins` | [`AllowedOrigin[] \| undefined`](../../doc/models/allowed-origin.md) | Optional | List containing the [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) linked to the API credential. |
| `associatedMerchantAccounts` | `string[] \| undefined` | Optional | List of merchant accounts that the API credential has explicit access to.<br>If the credential has access to a company, this implies access to all merchant accounts and no merchants for that company will be included. |
| `clientKey` | `string` | Required | Public key used for [client-side authentication](https://docs.adyen.com/development-resources/client-side-authentication). The client key is required for Drop-in and Components integrations. |
| `description` | `string \| undefined` | Optional | Description of the API credential.<br><br>**Constraints**: *Maximum Length*: `50` |
| `id` | `string` | Required | Unique identifier of the API credential. |
| `roles` | `string[]` | Required | List of [roles](https://docs.adyen.com/development-resources/api-credentials#roles-1) for the API credential. |
| `subjectDN` | `string \| undefined` | Optional | The subject DN of the certificate issued by Adyen. |
| `username` | `string` | Required | The name of the [API credential](https://docs.adyen.com/development-resources/api-credentials), for example **ws@Company.TestCompany**. |

## Example

```ts
import { CompanyApiCredential } from 'adyen';

const companyApiCredential: CompanyApiCredential = {
  active: false,
  allowedIpAddresses: [
    'allowedIpAddresses9'
  ],
  clientKey: 'clientKey0',
  id: 'id6',
  roles: [
    'roles0'
  ],
  username: 'username4',
  links: {
    self: {
      href: 'href0',
    },
    allowedOrigins: {
      href: 'href6',
    },
    company: {
      href: 'href2',
    },
    generateApiKey: {
      href: 'href6',
    },
    generateClientKey: {
      href: 'href4',
    },
    merchant: {
      href: 'href6',
    },
  },
  allowedOrigins: [
    {
      domain: 'domain0',
      links: {
        self: {
          href: 'href0',
        },
      },
      id: 'id4',
    }
  ],
  associatedMerchantAccounts: [
    'associatedMerchantAccounts6',
    'associatedMerchantAccounts7',
    'associatedMerchantAccounts8'
  ],
  description: 'description4',
  subjectDN: 'subjectDN6',
};
```

