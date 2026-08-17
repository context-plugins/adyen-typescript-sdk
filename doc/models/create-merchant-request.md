
# Create Merchant Request

## Structure

`CreateMerchantRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `businessLineId` | `string \| undefined` | Optional | The unique identifier of the [business line](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines). Required for an Adyen for Platforms Manage integration. |
| `companyId` | `string` | Required | The unique identifier of the company account. |
| `description` | `string \| undefined` | Optional | Your description for the merchant account, maximum 300 characters.<br><br>**Constraints**: *Maximum Length*: `300` |
| `legalEntityId` | `string \| undefined` | Optional | The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities). Required for an Adyen for Platforms Manage integration. |
| `pricingPlan` | `string \| undefined` | Optional | Sets the pricing plan for the merchant account. Required for an Adyen for Platforms Manage integration. Your Adyen contact will provide the values that you can use. |
| `reference` | `string \| undefined` | Optional | Your reference for the merchant account. To make this reference the unique identifier of the merchant account, your Adyen contact can set up a template on your company account. The template can have 6 to 255 characters with upper- and lower-case letters, underscores, and numbers. When your company account has a template, then the `reference` is required and must be unique within the company account. |
| `salesChannels` | `string[] \| undefined` | Optional | List of sales channels that the merchant will process payments with |

## Example

```ts
import { CreateMerchantRequest } from 'adyen';

const createMerchantRequest: CreateMerchantRequest = {
  companyId: 'companyId0',
  businessLineId: 'businessLineId2',
  description: 'description0',
  legalEntityId: 'legalEntityId4',
  pricingPlan: 'pricingPlan6',
  reference: 'reference4',
};
```

