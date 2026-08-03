
# Item Detail Line

*This model accepts additional fields of type unknown.*

## Structure

`ItemDetailLine`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `commodityCode` | `string \| undefined` | Optional | The code that identifies the item in a standardized commodity coding scheme. There are different commodity coding schemes:<br><br>* [UNSPSC commodity codes](https://www.ungm.org/public/unspsc)<br><br>* [HS commodity codes](https://www.wcoomd.org/en/topics/nomenclature/overview.aspx)<br><br>* [NAICS commodity codes](https://www.census.gov/naics/)<br><br>* [NAPCS commodity codes](https://www.census.gov/naics/napcs/)<br><br>* Encoding: ASCII<br><br>* Max length: 12 characters<br><br>* Must not start with a space or be all spaces.<br><br>* Must not be all zeros.<br><br>* **additionalData key:** `enhancedSchemeData.itemDetailLine[N].commodityCode` |
| `description` | `string \| undefined` | Optional | A description of the item, that provides details about the purchase.<br><br>For Visa transactions with level 3 ESD, the description must not be the same or very similar to your merchant name, or, consist only of common words like "product", or "service".<br><br>* Encoding: ASCII<br>* Max length: 26 characters<br>* Must not be a single character.<br>* Must not be blank.<br>* Must not be all special characters.<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `enhancedSchemeData.itemDetailLine[N].description` |
| `discountAmount` | `bigint \| undefined` | Optional | The discount amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `enhancedSchemeData.itemDetailLine[N].discountAmount` |
| `productCode` | `string \| undefined` | Optional | The product code. Must be a unique product code associated with the item or service. This can be your unique code for the item, or the manufacturer's product code.<br><br>* Encoding: ASCII.<br>* Max length: 12 characters<br>* **additionalData key:** `enhancedSchemeData.itemDetailLine[N].productCode` |
| `quantity` | `bigint \| undefined` | Optional | The number of items. Must be an integer greater than zero.<br><br>* Encoding: Numeric<br>* Max value: 9999<br>* **additionalData key:** `enhancedSchemeData.itemDetailLine[N].quantity` |
| `totalAmount` | `bigint \| undefined` | Optional | The total amount for the line item, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br><br>See [Amount requirements for level 2/3 ESD](https://docs.adyen.com//payment-methods/cards/enhanced-scheme-data/l2-l3#amount-requirements) to learn more about how to calculate the line item total.<br><br>* **additionalData key:** `enhancedSchemeData.itemDetailLine[N].totalAmount` |
| `unitOfMeasure` | `string \| undefined` | Optional | The unit of measurement for an item.<br><br>* Encoding: ASCII<br>* Max length: 3 characters<br>* **additionalData key:** `enhancedSchemeData.itemDetailLine[N].unitOfMeasure` |
| `unitPrice` | `bigint \| undefined` | Optional | The unit price, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `enhancedSchemeData.itemDetailLine[N].unitPrice` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ItemDetailLine } from 'adyenlib';

const itemDetailLine: ItemDetailLine = {
  commodityCode: 'commodityCode0',
  description: 'description6',
  discountAmount: BigInt(18),
  productCode: 'productCode4',
  quantity: BigInt(238),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

