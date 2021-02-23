import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import AlertContext from 'context/alert/alertContext';
import AppTheme from 'components/AppTheme';
import TodoForm from 'components/Todos/TodoForm';

const customRender = (ui, { providerProps, ...renderOptions }) => {
   return render(
      <AppTheme>
         <AlertContext.Provider {...providerProps}>{ui}</AlertContext.Provider>
      </AppTheme>,
      renderOptions
   );
};

it('requires a title in order to submit', () => {
   const addTodo = jest.fn();
   const setToggleForm = jest.fn();
   const userId = 'abc';

   const providerProps = {
      value: {
         alerts: [],
         showAlert: jest.fn(),
      },
   };

   const { getByText } = customRender(
      <TodoForm
         addTodo={addTodo}
         setToggleForm={setToggleForm}
         userId={userId}
      />,
      { providerProps }
   );

   expect(getByText(/Add Task/i).closest('button')).toBeDisabled();
   userEvent.type(screen.getByLabelText(/title/i), 'Go to the store');
   expect(getByText(/Add Task/i).closest('button')).not.toBeDisabled();
});

it('renders and submits a todo form', async () => {
   const addTodo = jest.fn();
   const setToggleForm = jest.fn();
   const userId = 'abc';

   const providerProps = {
      value: {
         alerts: [],
         showAlert: jest.fn(),
      },
   };

   customRender(
      <TodoForm
         addTodo={addTodo}
         setToggleForm={setToggleForm}
         userId={userId}
      />,
      { providerProps }
   );

   userEvent.type(screen.getByLabelText(/title/i), 'Go to the store');
   userEvent.type(screen.getByLabelText(/priority/i), 'Low');
   //    userEvent.type(screen.getByLabelText(/due date/i), '01/01/1969');
   userEvent.type(screen.getByLabelText(/details/i), 'Get food');

   userEvent.click(screen.getByRole('button'));

   await waitFor(() => {
      expect(addTodo).toHaveBeenCalledWith({
         title: 'Go to the store',
         priority: 'Low',
         dueDate: '',
         details: 'Get food',
         user: userId,
         completed: false,
      });
   });
});
