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
	.user-list {
    display: flex;
    flex-flow: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .user-list li {
    width: 20%;
    padding: 10px;
  }
</style>

<main>
  {#if users}
    <ul class="user-list">
      {#each users as user}
        <User avatar={ user.avatar_url } username={ user.login } />
      {/each}
    </ul>
  {/if}
</main>