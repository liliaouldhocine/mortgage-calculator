import { render, screen } from '@testing-library/react';
import { TextInput } from '.';

test('renders learn react link', () => {
  render(<TextInput name="testName" label="Test Label" />);
  const linkElement = screen.getByText(/Test Label/i);
  expect(linkElement).toBeInTheDocument();
});
