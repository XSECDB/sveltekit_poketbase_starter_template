<script>
  import "../app.css";
  import Navigation from "$lib/components/Navigation.svelte";
  import { currentUser, pb } from "$lib/pocketbase";
  import { onMount } from "svelte";

  onMount(() => {
    // Try to refresh the session on mount
    if (pb.authStore.isValid) {
      pb.collection('users').authRefresh().catch(() => {
        pb.authStore.clear();
      });
    }
  });
</script>

<Navigation />

<main class="container mx-auto py-4 px-4">
  <slot />
</main>
