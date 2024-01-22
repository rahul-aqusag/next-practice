import CustomHead from '@/components/CustomHead';
import { RootState } from '@/store/reducer';
import { decrement, increment } from '@/store/reducers/counterSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';

function Home() {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const { value } = counter;
  return (
    <div>
      <CustomHead title="Next Project" />
      <h1>Home Page</h1>
      {/* =========== for Counter ========== */}
      <div style={{
        width: '25%', border: '1px solid gray', padding: '5px', display: 'grid', alignItems: 'center', justifyContent: 'center', borderRadius: '10px',
      }}
      >
        <h1 style={{ textAlign: 'center', fontFamily: 'cursive' }}>Counter</h1>
        <div style={{
          display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center',
        }}
        >
          <button type="button" style={{ height: '100%' }} onClick={() => dispatch(increment(1))}>+</button>
          <h1 style={{ textAlign: 'center' }}>{value}</h1>
          <button type="button" style={{ height: '100%' }} onClick={() => dispatch(decrement(1))}>-</button>
        </div>
      </div>
      {/* ============== for Todo ============= */}
      <div style={{
        width: '25%', border: '1px solid gray', padding: '10px', display: 'grid', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', marginTop: '20px',
      }}
      >
        <Todo />
      </div>
    </div>
  );
}

export default Home;
