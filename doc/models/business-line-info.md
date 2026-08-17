
# Business Line Info

## Structure

`BusinessLineInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `industryCode` | `string` | Required | A code that represents the industry of the legal entity for [marketplaces](https://docs.adyen.com/marketplaces/verification-requirements/reference-additional-products/#list-industry-codes) or [platforms](https://docs.adyen.com/platforms/verification-requirements/reference-additional-products/#list-industry-codes). For example, **4431A** for computer software stores. |
| `industryCodeDescription` | `string \| undefined` | Optional, Read-only | The description of the industry code. |
| `legalEntityId` | `string` | Required | Unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) that owns the business line. |
| `salesChannels` | `string[] \| undefined` | Optional | A list of channels where goods or services are sold.<br><br>Possible values: **pos**, **posMoto**, **eCommerce**, **ecomMoto**, **payByLink**.<br><br>Required only in combination with the `service` **paymentProcessing**. |
| `service` | [`ServiceEnum`](../../doc/models/service-enum.md) | Required | The service for which you are creating the business line.<br><br>Possible values:<br><br>* **paymentProcessing**<br>* **issuing**<br>* **banking** |
| `sourceOfFunds` | [`SourceOfFunds11 \| undefined`](../../doc/models/source-of-funds-11.md) | Optional | Contains information about the source of your user's funds. Required only if the `service` is **banking** or **issuing**. |
| `webData` | [`WebData[] \| undefined`](../../doc/models/web-data.md) | Optional | List of website URLs where your user's goods or services are sold. When this is required for a service but your user does not have an online presence, provide the reason in the `webDataExemption` object. |
| `webDataExemption` | [`WebDataExemption1 \| undefined`](../../doc/models/web-data-exemption-1.md) | Optional | The reason why the web data is not provided. |

## Example

```ts
import { BusinessLineInfo, Reason3Enum, ServiceEnum } from 'adyen';

const businessLineInfo: BusinessLineInfo = {
  industryCode: 'industryCode0',
  legalEntityId: 'legalEntityId4',
  service: ServiceEnum.Issuing,
  salesChannels: [
    'salesChannels2',
    'salesChannels3'
  ],
  sourceOfFunds: {
    adyenProcessedFunds: false,
    amount: {
      currency: 'currency2',
      value: BigInt(110),
    },
    assetMonthsHeld: 46,
    cryptocurrencyExchange: 'cryptocurrencyExchange2',
    dateOfFundsReceived: '2016-03-13T12:52:32.123Z',
    dateOfSourceEvent: '2016-03-13T12:52:32.123Z',
  },
  webData: [
    {
      webAddress: 'webAddress4',
    },
    {
      webAddress: 'webAddress4',
    },
    {
      webAddress: 'webAddress4',
    }
  ],
  webDataExemption: {
    reason: Reason3Enum.NoOnlinePresence,
  },
};
```

