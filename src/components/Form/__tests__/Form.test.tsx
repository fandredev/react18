import { fireEvent, render, screen } from '@testing-library/react';
import { task } from 'common/mocks/List.mock';
import Form from '..';

describe(`Test Component: ${Form.name}`, () => {

  beforeEach(() => {
    render(<Form setTasks={() => [{ ...task }]} />);
  })
  it('Should be possible to snapshot the Button component when the page is rendered', () => {
    const { container } = render(<Form setTasks={() => [{ ...task }]} />);
    expect(container).toMatchSnapshot();
  });

  it('Deve ser possível digitar um novo tipo de estudo no input de estudo do formulario', () => {

    const inputNewTask = screen.getByPlaceholderText('O que você quer estudar');
    fireEvent.change(inputNewTask, {
      target: {
        value: 'Estudar React',
      },
    });

    expect(inputNewTask.getAttribute('value')).toBe('Estudar React');
  });

  it('Deve ser possível digitar um novo tempo para o estudo no input de tempo do formulario', () => {
    const inputNewTaskTime = screen.getByTestId('input-time');
    expect(inputNewTaskTime).toHaveValue('00:00:00');

    fireEvent.change(inputNewTaskTime, {
      target: {
        value: '01:02:00',
      },
    });

    expect(inputNewTaskTime.getAttribute('value')).toBe('01:02:00');
  });
});
