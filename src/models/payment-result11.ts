import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountsResp1Schema, type AmountsResp1 } from "./amounts-resp1.js";
import { authenticationMethod1Schema, type AuthenticationMethod1 } from "./authentication-method1.js";
import { capturedSignature1Schema, type CapturedSignature1 } from "./captured-signature1.js";
import { currencyConversionSchema, type CurrencyConversion } from "./currency-conversion.js";
import { instalment1Schema, type Instalment1 } from "./instalment1.js";
import { paymentAcquirerDataSchema, type PaymentAcquirerData } from "./payment-acquirer-data.js";
import { paymentInstrumentDataSchema, type PaymentInstrumentData } from "./payment-instrument-data.js";
import { paymentType1Schema, type PaymentType1 } from "./payment-type1.js";

export type PaymentResult11 = {
  paymentType?: PaymentType1;
  paymentInstrumentData?: PaymentInstrumentData;
  amountsResp?: AmountsResp1;
  instalment?: Instalment1;
  currencyConversion?: CurrencyConversion[];
  merchantOverrideFlag?: boolean;
  capturedSignature?: CapturedSignature1;
  protectedSignature?: string;
  customerLanguage?: string;
  onlineFlag?: boolean;
  authenticationMethod?: AuthenticationMethod1[];
  validityDate?: string;
  paymentAcquirerData?: PaymentAcquirerData;
};

export const paymentResult11Schema: Schema<PaymentResult11> = s.object<PaymentResult11>({
  paymentType: s.optional(s.lazy(() => paymentType1Schema)),
  paymentInstrumentData: s.optional(s.lazy(() => paymentInstrumentDataSchema)),
  amountsResp: s.optional(s.lazy(() => amountsResp1Schema)),
  instalment: s.optional(s.lazy(() => instalment1Schema)),
  currencyConversion: s.optional(s.array(s.lazy(() => currencyConversionSchema))),
  merchantOverrideFlag: s.optional(s.boolean()),
  capturedSignature: s.optional(s.lazy(() => capturedSignature1Schema)),
  protectedSignature: s.optional(s.string()),
  customerLanguage: s.optional(s.string()),
  onlineFlag: s.optional(s.boolean()),
  authenticationMethod: s.optional(s.array(s.lazy(() => authenticationMethod1Schema))),
  validityDate: s.optional(s.dateOnly()),
  paymentAcquirerData: s.optional(s.lazy(() => paymentAcquirerDataSchema)),
  _keysMap: {
    paymentType: "PaymentType",
    paymentInstrumentData: "PaymentInstrumentData",
    amountsResp: "AmountsResp",
    instalment: "Instalment",
    currencyConversion: "CurrencyConversion",
    merchantOverrideFlag: "MerchantOverrideFlag",
    capturedSignature: "CapturedSignature",
    protectedSignature: "ProtectedSignature",
    customerLanguage: "CustomerLanguage",
    onlineFlag: "OnlineFlag",
    authenticationMethod: "AuthenticationMethod",
    validityDate: "ValidityDate",
    paymentAcquirerData: "PaymentAcquirerData",
  },
});
