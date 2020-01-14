<script>
  import User from './User.svelte'

  let usernameQuery = ''
  let user

  function handleSubmit(e) {
    e.preventDefault()

    fetch(`https://api.github.com/users/${usernameQuery}`)
    .then(response => response.json())
    .then(data => (user = data))
  }
</script>

<style>
  .user-search {
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 50px;
    background: #efefef;
  }

  h2 {
    margin: 0 0 15px;
  }
</style>

<div class="user-search">
  <h2>Search for Users</h2>

  <form on:submit={ handleSubmit }>
    <input type="text" bind:value={ usernameQuery } />
    <button>Search</button>
  </form>

  {#if user}
    <User avatar={ user.avatar_url } username={ user.login } />
  {/if}
</div>