import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import UserSearch from '../src/UserSearch.svelte'

test('shows header when rendered', () => {
  const { getByText } = render(UserSearch)

  expect(getByText('Search for Users')).toBeInTheDocument()
})