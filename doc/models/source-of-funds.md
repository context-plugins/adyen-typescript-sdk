
# Source of Funds

*This model accepts additional fields of type unknown.*

## Structure

`SourceOfFunds`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adyenProcessedFunds` | `boolean` | Required | Indicates whether the funds are coming from transactions processed by Adyen. If **false**, the `type` is required. |
| `amount` | [`Amount64 \| undefined`](../../doc/models/amount-64.md) | Optional | - |
| `assetMonthsHeld` | `number \| undefined` | Optional | The number of months that the asset has been in possession of the user.<br><br>For example, if the source of funds is of type **cryptocurrencyIncome** then `assetMonthsHeld` is the number of months the user has owned the cryptocurrency. |
| `cryptocurrencyExchange` | `string \| undefined` | Optional | Required if `type` is **cryptocurrencyIncome**. The cryptocurrency exchange where the funds were acquired. |
| `dateOfFundsReceived` | `string \| undefined` | Optional | Required if `type` is **donations** or **inheritance**. The date the funds were received, in YYYY-MM-DD format. |
| `dateOfSourceEvent` | `string \| undefined` | Optional | Required if `type` is **assetSale** or **gamblingWinnings**. The date the funds were received, in YYYY-MM-DD format.<br><br>For example, if the source of funds is of type **assetSale**, the dateOfSourceEvent is the date of the sale. If the source of funds is of type **gamblingWinnings**, the dateOfSourceEvent is the date of winnings. |
| `description` | `string \| undefined` | Optional | Required if `type` is **business** or **assetSale**. A description for the source of funds.<br><br>For example, for `type` **business**, provide a description of where the business transactions come from, such as payments through bank transfer. For `type` **assetSale**, provide a description of the asset. For example, the address of a residential property if it is a property sale. |
| `financiers` | [`Financier[] \| undefined`](../../doc/models/financier.md) | Optional | Required if `type` is **thirdPartyFunding**. Information about the financiers. |
| `originatorLegalEntityId` | `string \| undefined` | Optional | Required if `type` is **donations** or **inheritance**. The legal entity ID representing the originator of the source of funds.<br><br>For example, if the source of funds is **inheritance**, then `originatorOfFundsReference` should be the legal entity reference of the benefactor. |
| `purpose` | `string \| undefined` | Optional | Required if `type` is **donations**. The reason for receiving the funds. |
| `relationship` | `string \| undefined` | Optional | Required if `type` is **donations** or **inheritance**. The relationship of the originator of the funds to the recipient. |
| `type` | [`Type72 \| undefined`](../../doc/models/type-72.md) | Optional | - |
| `website` | `string \| undefined` | Optional | Required if `type` is **gamblingWinnings**. The location of the gambling site for the winnings.<br><br>For example, if the source of funds is online gambling, provide the website of the gambling company. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SourceOfFunds } from 'adyen';

const sourceOfFunds: SourceOfFunds = {
  adyenProcessedFunds: false,
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  assetMonthsHeld: 46,
  cryptocurrencyExchange: 'cryptocurrencyExchange2',
  dateOfFundsReceived: '2016-03-13T12:52:32.123Z',
  dateOfSourceEvent: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

