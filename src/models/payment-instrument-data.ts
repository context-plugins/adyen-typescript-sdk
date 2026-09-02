import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardData1Schema, type CardData1 } from "./card-data1.js";
import { checkData1Schema, type CheckData1 } from "./check-data1.js";
import { mobileData1Schema, type MobileData1 } from "./mobile-data1.js";
import { paymentInstrumentType11Schema, type PaymentInstrumentType11 } from "./payment-instrument-type11.js";
import { storedValueAccountIdSchema, type StoredValueAccountId } from "./stored-value-account-id.js";

export type PaymentInstrumentData = {
  paymentInstrumentType: PaymentInstrumentType11;
  protectedCardData?: string;
  cardData?: CardData1;
  checkData?: CheckData1;
  mobileData?: MobileData1;
  storedValueAccountId?: StoredValueAccountId;
};

export const paymentInstrumentDataSchema: Schema<PaymentInstrumentData> = s.object<PaymentInstrumentData>({
  paymentInstrumentType: paymentInstrumentType11Schema,
  protectedCardData: s.optional(s.string()),
  cardData: s.optional(s.lazy(() => cardData1Schema)),
  checkData: s.optional(s.lazy(() => checkData1Schema)),
  mobileData: s.optional(s.lazy(() => mobileData1Schema)),
  storedValueAccountId: s.optional(s.lazy(() => storedValueAccountIdSchema)),
  _keysMap: {
    paymentInstrumentType: "PaymentInstrumentType",
    protectedCardData: "ProtectedCardData",
    cardData: "CardData",
    checkData: "CheckData",
    mobileData: "MobileData",
    storedValueAccountId: "StoredValueAccountID",
  },
});
