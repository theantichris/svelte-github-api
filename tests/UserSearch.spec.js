import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, act } from '@testing-library/svelte'
import UserSearch from '../src/UserSearch.svelte'

test('shows header when rendered', () => {
  const { getByText } = render(UserSearch)

  expect(getByText('Search for Users')).toBeInTheDocument()
})

test('searches GitHub for user', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    "login": "theantichris",
    "avatar_url": "https://avatars1.githubusercontent.com/u/1486502?v=4"
  }))

  const { getByText, getByPlaceholderText } = render(UserSearch)

  const input = getByPlaceholderText('search...')
  await fireEvent.input(input, { target: { value: 'theantichris' } })

  const button = getByText('Search')
  await fireEvent.click(button)

  expect(fetch.mock.calls.length).toEqual(1)
  expect(fetch.mock.calls[0][0]).toEqual('https://api.github.com/users/theantichris')
})