import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodoData, updateTodoData } from '@/store/reducers/todoSlice';
import { RootState } from '@/store/reducer';

interface TodoState {
  title: string;
  description: string;
  id: string,
}

const Todo: React.FC = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state: RootState) => state.todo);
  const { todoList } = todo;
  const initialStates = {
    title: '',
    description: '',
    id: nanoid(),
  };
  const [state, setState] = useState<TodoState>(initialStates);
  const [isUpdate, setIsUpdate] = useState<Boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!isUpdate) dispatch(addTodo(state));
    else {
      dispatch(updateTodoData(state));
      setIsUpdate(false);
    }
    setState(initialStates);
  };

  // useEffect(() => {
  //   console.log(todoList);
  // }, [todoList]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: 'center', fontFamily: 'cursive' }}>Todo</h1>
        <div style={{ width: '100%', display: 'flex', gap: '10px' }}>
          <input name="title" style={{ width: '100%' }} value={state?.title} onChange={handleChange} />
          <button style={{ height: '100%' }} type="submit">{isUpdate ? 'Update' : 'Add Todo'}</button>
        </div>
      </form>
      <div>
        <table style={{ border: '1px solid gray', marginTop: '2rem' }}>
          <thead>
            <tr style={{ border: '1px solid gray' }}>
              <th>Sr no.</th>
              <th>Todo Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              todoList?.map((elem: any, index: number) => (
                <tr key={elem?.id} style={{ border: '1px solid gray' }}>
                  <td style={{ border: '1px solid gray' }}>{index + 1}</td>
                  <td style={{ border: '1px solid gray' }}>{elem?.title}</td>
                  <td style={{ border: '1px solid gray' }}>
                    <button type="button" onClick={() => dispatch(removeTodoData(elem))}>❌</button>
                    <button
                      type="button"
                      onClick={() => {
                        setState(elem);
                        setIsUpdate(true);
                      }}
                    >
                      ✏️
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
