<script>
  import { currentUser } from '$lib/pocketbase';
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
</script>

<div class="max-w-2xl mx-auto">
  <Card>
    <CardHeader>
      <CardTitle>Welcome to Your Dashboard</CardTitle>
      <CardDescription>You're successfully logged in!</CardDescription>
    </CardHeader>
    <CardContent>
      {#if $currentUser}
        <div class="space-y-4">
          <div>
            <h3 class="font-medium">Your Email</h3>
            <p class="text-sm text-gray-600">{$currentUser.email}</p>
          </div>
          <div>
            <h3 class="font-medium">Account Created</h3>
            <p class="text-sm text-gray-600">
              {new Date($currentUser.created).toLocaleDateString()}
            </p>
          </div>
        </div>
      {/if}
    </CardContent>
  </Card>
</div>
