import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}
//logic Redux cho tính năng bộ đếm
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            //Redux Toolkit cho phép viết logic 'mutating' trong reducers.
            //Nó không thực sự thay đổi state vì nó sử dụng thư viện immer
            //phát hiện các thay đổi đối với "draft state" và 
            //tạo ra một immutable state mới dựa trên những thay đổi đó
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
            //reducer decrement sẽ luôn trừ 1 vào state.value
            //Bởi vì Immer biết rằng ta đã thực hiện các thay đổi đối với draft state, 
            //nên ta không cần return bất kỳ thứ gì ở đây.
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
            //incrementByAmount cần phải biết: nó sẽ thêm bao nhiêu vào giá trị bộ đếm.
            //vì vậy cần có cả hai đối số state và action
            
        }
    }
});

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;