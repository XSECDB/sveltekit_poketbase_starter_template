import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';
import { env } from '$env/dynamic/public';

export const pb = new PocketBase(env.PUBLIC_POCKETBASE_URL);

/**
 * @type {import('svelte/store').Writable<any>}
 */
export const currentUser = writable(pb.authStore.model);

// Listen to auth state changes
pb.authStore.onChange((auth) => {
    currentUser.set(pb.authStore.model);
});

/**
 * Login user with email and password
 * @param {string} email
 * @param {string} password
 */
export async function login(email, password) {
    try {
        return await pb.collection('users').authWithPassword(email, password);
    } catch (error) {
        console.error('Auth error:', error);
        throw error;
    }
}

/**
 * Register new user
 * @param {string} email
 * @param {string} password
 * @param {string} passwordConfirm
 */
export async function register(email, password, passwordConfirm) {
    const data = {
        email,
        password,
        passwordConfirm,
        emailVisibility: true,
    };
    return await pb.collection('users').create(data);
}

/**
 * Logout current user
 */
export function logout() {
    pb.authStore.clear();
}

/**
 * Check if user is logged in
 * @returns {boolean}
 */
export function isLoggedIn() {
    return pb.authStore.isValid;
}
