import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { StateMock } from '@react-mock/state';
import '@testing-library/jest-dom/extend-expect';
import TodoItem from 'components/Todos/TodoItem';
import AppTheme from 'components/AppTheme';

const incompleteItem = {
   completed: false,
   details: '',
   dueDate: '',
   id: '1234',
   priority: 'low',
   title: 'Go to the store',
   user: 'abcdefgh',
};

const completeItem = {
   completed: true,
   details: '',
   dueDate: '',
   id: '1234',
   priority: 'low',
   title: 'Go to the store',
   user: 'abcdefgh',
};
const customRender = (ui) => {
   return render(<AppTheme>{ui}</AppTheme>);
};

test('renders the title', () => {
   const toggleTodo = jest.fn();
   const { getByText } = customRender(
      <TodoItem item={incompleteItem} toggleTodo={toggleTodo} />
   );

   expect(getByText(/Go to the store/i)).toBeInTheDocument();
});

test('clicking the checkbox calls the toggle func', async () => {
   const toggleTodo = jest.fn();

   const { getByRole } = customRender(
      <TodoItem item={incompleteItem} toggleTodo={toggleTodo} />
   );

   const checkbox = getByRole('checkbox');
   fireEvent.click(checkbox);
   expect(toggleTodo).toHaveBeenCalledTimes(1);
   expect(toggleTodo).toHaveBeenCalledWith(incompleteItem);
});

test('The text is grey when todo is completed', () => {
   const toggleTodo = jest.fn();
   const { getByText } = customRender(
      <TodoItem item={completeItem} toggleTodo={toggleTodo} />
   );

   const text = getByText(/Go to the store/);

   expect(text).toHaveStyle(`color: rgb(136, 153, 166)`);
});

test('clicking the todo expands the details', async () => {
   const toggleTodo = jest.fn();

   const { getByTestId } = customRender(
      <StateMock state={{ toggleDetails: false }}>
         <TodoItem item={incompleteItem} toggleTodo={toggleTodo} />
      </StateMock>
   );
   const container = getByTestId('todo-item');
   fireEvent.click(container);
   await waitFor(() => {
      expect(getByTestId('todo-details')).toBeInTheDocument();
   });
});
