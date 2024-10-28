import { redirect } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';

export function load() {
    if (!pb.authStore.isValid) {
        throw redirect(303, '/login');
    }
    return {};
}
