import { redirect } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';

export function load() {
    // Redirect to dashboard if authenticated, otherwise to login
    if (pb.authStore.isValid) {
        throw redirect(303, '/dashboard');
    } else {
        throw redirect(303, '/login');
    }
}