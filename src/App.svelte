<script>
  import { onMount } from 'svelte'
  import User from './User.svelte'

  let users

  onMount(() => {
    getGitHubUsers()
  })

  function getGitHubUsers() {
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => users = data)
  }
</script>

<style>
	
</style>

<main>
  {#if users}
    <ul>
      {#each users as user}
        <User avatar={ user.avatar_url } username={ user.login } />
      {/each}
    </ul>
  {/if}
</main>