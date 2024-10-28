<script>
  import { Button } from '$lib/components/ui/button';
  import { currentUser, logout } from '$lib/pocketbase';
  import { goto } from '$app/navigation';

  function handleLogout() {
    logout();
    goto('/login');
  }
</script>

<nav class="border-b">
  <div class="container flex h-16 items-center px-4">
    <a href="/dashboard" class="font-bold">SvelteKit Auth</a>

    <div class="ml-auto flex items-center space-x-4">
      {#if $currentUser}
        <span class="text-sm text-gray-600">{$currentUser.email}</span>
        <Button variant="outline" on:click={handleLogout}>Logout</Button>
      {:else}
        <Button variant="outline" href="/login">Login</Button>
        <Button href="/register">Register</Button>
      {/if}
    </div>
  </div>
</nav>
