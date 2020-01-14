<script>
  import { onMount } from 'svelte'

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
        <li>{ user.login }</li>
      {/each}
    </ul>
  {/if}
</main>