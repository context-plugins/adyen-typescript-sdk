
# Business Line Info Update

## Structure

`BusinessLineInfoUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `industryCode` | `string \| undefined` | Optional | A code that represents the industry of your legal entity. For example, **4431A** for computer software stores. |
| `industryCodeDescription` | `string \| undefined` | Optional, Read-only | The description of the industry code. |
| `salesChannels` | `string[] \| undefined` | Optional | A list of channels where goods or services are sold.<br><br>Possible values: **pos**, **posMoto**, **eCommerce**, **ecomMoto**, **payByLink**.<br><br>Required only in combination with the `service` **paymentProcessing**. |
| `sourceOfFunds` | [`SourceOfFunds11 \| undefined`](../../doc/models/source-of-funds-11.md) | Optional | Contains information about the source of your user's funds. Required only if the `service` is **banking** or **issuing**. |
| `webData` | [`WebData[] \| undefined`](../../doc/models/web-data.md) | Optional | List of website URLs where your user's goods or services are sold. When this is required for a service but your user does not have an online presence, provide the reason in the `webDataExemption` object. |
| `webDataExemption` | [`WebDataExemption1 \| undefined`](../../doc/models/web-data-exemption-1.md) | Optional | The reason why the web data is not provided. |

## Example

```ts
import { BusinessLineInfoUpdate } from 'adyen';

const businessLineInfoUpdate: BusinessLineInfoUpdate = {
  industryCode: 'industryCode0',
  salesChannels: [
    'salesChannels2'
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
    }
  ],
};
```

