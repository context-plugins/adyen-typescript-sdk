
# Company 2

*This model accepts additional fields of type unknown.*

## Structure

`Company2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`CompanyLinks \| undefined`](../../doc/models/company-links.md) | Optional | - |
| `dataCenters` | [`DataCenter[] \| undefined`](../../doc/models/data-center.md) | Optional | List of available data centers.<br><br>Adyen has several data centers around the world.In the URL that you use for making API requests, we recommend you use the live URL prefix from the data center closest to your shoppers. |
| `description` | `string \| undefined` | Optional | Your description for the company account, maximum 300 characters |
| `id` | `string \| undefined` | Optional | The unique identifier of the company account. |
| `name` | `string \| undefined` | Optional | The legal or trading name of the company. |
| `reference` | `string \| undefined` | Optional | Your reference to the account |
| `status` | `string \| undefined` | Optional | The status of the company account.<br><br>Possible values:<br><br>* **Active**: Users can log in. Processing and payout capabilities depend on the status of the merchant account.<br>* **Inactive**: Users can log in. Payment processing and payouts are disabled.<br>* **Closed**: The company account is closed and this cannot be reversed. Users cannot log in. Payment processing and payouts are disabled. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Company2 } from 'adyen';

const company2: Company2 = {
  links: {
    self: {
      href: 'href0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    apiCredentials: {
      href: 'href8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    users: {
      href: 'href8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    webhooks: {
      href: 'href8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  dataCenters: [
    {
      livePrefix: 'livePrefix4',
      name: 'name6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      livePrefix: 'livePrefix4',
      name: 'name6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      livePrefix: 'livePrefix4',
      name: 'name6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  description: 'description4',
  id: 'id4',
  name: 'name4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

