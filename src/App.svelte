<script>
  function getGitHubUsers(){
    fetch('https://api.github.com/users')
    .then(response => { response.json() })
    .then(data => { 
      console.log(data);
    })
  }
</script>

<style>
	
</style>

<main>

</main>