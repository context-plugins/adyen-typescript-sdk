
# Stock Data 2

Information about the organization's publicly traded stock. Provide this object only if `type` is **listedPublicCompany**.

*This model accepts additional fields of type unknown.*

## Structure

`StockData2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `marketIdentifier` | `string \| undefined` | Optional | The four-digit [Market Identifier Code](https://en.wikipedia.org/wiki/Market_Identifier_Code) of the stock market where the organization's stocks are traded. |
| `stockNumber` | `string \| undefined` | Optional | The 12-digit International Securities Identification Number (ISIN) of the company, without dashes (-). |
| `tickerSymbol` | `string \| undefined` | Optional | The stock ticker symbol. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { StockData2 } from 'adyen';

const stockData2: StockData2 = {
  marketIdentifier: 'marketIdentifier4',
  stockNumber: 'stockNumber0',
  tickerSymbol: 'tickerSymbol0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

