<script>
  import { goto } from '$app/navigation';
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { register, login, isLoggedIn } from '$lib/pocketbase';
  import { onMount } from 'svelte';

  let email = '';
  let password = '';
  let passwordConfirm = '';
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

    if (password !== passwordConfirm) {
      error = 'Passwords do not match';
      loading = false;
      return;
    }

    try {
      await register(email, password, passwordConfirm);
      // After successful registration, log the user in
      await login(email, password);
      goto('/');
    } catch (/** @type {any} */ err) {
      error = err?.response?.message || err?.message || 'Failed to register';
    } finally {
      loading = false;
    }
  }
</script>

<div class="container flex h-screen w-screen flex-col items-center justify-center">
  <Card class="w-[350px]">
    <CardHeader>
      <CardTitle>Register</CardTitle>
      <CardDescription>Create a new account</CardDescription>
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
        <div class="space-y-2">
          <Label for="passwordConfirm">Confirm Password</Label>
          <Input
            id="passwordConfirm"
            type="password"
            placeholder="Confirm your password"
            bind:value={passwordConfirm}
            required
          />
        </div>
        {#if error}
          <p class="text-sm text-red-500">{error}</p>
        {/if}
        <Button type="submit" class="w-full" disabled={loading}>
          {loading ? 'Loading...' : 'Register'}
        </Button>
      </form>
    </CardContent>
    <CardFooter class="flex justify-center">
      <p class="text-sm text-gray-600">
        Already have an account?
        <a href="/login" class="text-blue-600 hover:underline">Login</a>
      </p>
    </CardFooter>
  </Card>
</div>
