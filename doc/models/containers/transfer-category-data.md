
# Transfer Category Data

## Class Name

`TransferCategoryData`

## Cases

| Type |
|  --- |
| [`BankCategoryData`](../../../doc/models/bank-category-data.md) |
| [`InternalCategoryData`](../../../doc/models/internal-category-data.md) |
| [`IssuedCard`](../../../doc/models/issued-card.md) |
| [`PlatformPayment`](../../../doc/models/platform-payment.md) |

## BankCategoryData

### Initialization Code

#### Example

```ts
const value: TransferCategoryData = {
  type: Type310Enum.Bank,
};
```

## InternalCategoryData

### Initialization Code

#### Example

```ts
const value: TransferCategoryData = {
  type: Type411Enum.Internal,
};
```

## IssuedCard

### Initialization Code

#### Example

```ts
const value: TransferCategoryData = {
  type: Type511Enum.IssuedCard,
};
```

## PlatformPayment

### Initialization Code

#### Example

```ts
const value: TransferCategoryData = {
  type: Type63Enum.PlatformPayment,
};
```

