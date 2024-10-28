<script>
  import { goto } from '$app/navigation';
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { login, isLoggedIn } from '$lib/pocketbase';
  import { onMount } from 'svelte';

  let email = '';
  let password = '';
  let error = '';
  let loading = false;

  onMount(() => {
    if (isLoggedIn()) {
      goto('/');
    }
  });

  async function handleSubmit() {
    loading = true;
    error = '';

    try {
      await login(email, password);
      goto('/');
    } catch (/** @type {any} */ err) {
      error = err?.response?.message || err?.message || 'Failed to login';
    } finally {
      loading = false;
    }
  }
</script>

<div class="container flex h-screen w-screen flex-col items-center justify-center">
  <Card class="w-[350px]">
    <CardHeader>
      <CardTitle>Login</CardTitle>
      <CardDescription>Enter your email and password to login</CardDescription>
    </CardHeader>
    <CardContent>
      <form on:submit|preventDefault={handleSubmit} class="space-y-4">
        <div class="space-y-2">
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            bind:value={email}
            required
          />
        </div>
        <div class="space-y-2">
          <Label for="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            bind:value={password}
            required
          />
        </div>
        {#if error}
          <p class="text-sm text-red-500">{error}</p>
        {/if}
        <Button type="submit" class="w-full" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </Button>
      </form>
    </CardContent>
    <CardFooter class="flex justify-center">
      <p class="text-sm text-gray-600">
        Don't have an account?
        <a href="/register" class="text-blue-600 hover:underline">Register</a>
      </p>
    </CardFooter>
  </Card>
</div>
