
# Transfer View 2 Category Data

## Class Name

`TransferView2CategoryData`

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
const value: TransferView2CategoryData = {
  type: Type310Enum.Bank,
};
```

## InternalCategoryData

### Initialization Code

#### Example

```ts
const value: TransferView2CategoryData = {
  type: Type411Enum.Internal,
};
```

## IssuedCard

### Initialization Code

#### Example

```ts
const value: TransferView2CategoryData = {
  type: Type511Enum.IssuedCard,
};
```

## PlatformPayment

### Initialization Code

#### Example

```ts
const value: TransferView2CategoryData = {
  type: Type63Enum.PlatformPayment,
};
```

