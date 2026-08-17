
# Stock Data

## Structure

`StockData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `marketIdentifier` | `string \| undefined` | Optional | The four-digit [Market Identifier Code](https://en.wikipedia.org/wiki/Market_Identifier_Code) of the stock market where the organization's stocks are traded. |
| `stockNumber` | `string \| undefined` | Optional | The 12-digit International Securities Identification Number (ISIN) of the company, without dashes (-). |
| `tickerSymbol` | `string \| undefined` | Optional | The stock ticker symbol. |

## Example

```ts
import { StockData } from 'adyen';

const stockData: StockData = {
  marketIdentifier: 'marketIdentifier4',
  stockNumber: 'stockNumber0',
  tickerSymbol: 'tickerSymbol0',
};
```

