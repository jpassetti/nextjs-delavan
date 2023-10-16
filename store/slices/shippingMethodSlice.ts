import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ShippingMethod = {
  id: number;
  title: string;
  enabled: boolean;
  method_id: string;
  method_title: string;
};

type ShippingMethodState = ShippingMethod | null; // null when no shipping method selected

const initialState: ShippingMethod = {
  id: 1,  // Assuming 1 is the ID of your default shipping method
  title: "Mail",
  enabled: true,
  method_id: "flat_rate",
  method_title: "Flat Rate",
};

const shippingMethodSlice = createSlice({
  name: 'shippingMethod',
  initialState,
  reducers: {
    setShippingMethod: (state, action: PayloadAction<ShippingMethod>) => {
      return action.payload;
    },
    clearShippingMethod: (state) => {
      return null;
    },
  },
});

// Export the action creators
export const { setShippingMethod, clearShippingMethod } = shippingMethodSlice.actions;

// Export the reducer
export default shippingMethodSlice.reducer;