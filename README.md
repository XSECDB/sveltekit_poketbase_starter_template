# SvelteKit + PocketBase Auth Template

A modern, production-ready authentication template built with SvelteKit and PocketBase. This template provides a solid foundation for building web applications with authentication, protected routes, and a clean UI using Shadcn-Svelte components.

## Features

- 🔐 Complete authentication system (Login/Register/Logout)
- 🚀 Persistent authentication across page reloads
- 🛡️ Protected routes with automatic redirects
- 💅 Modern UI with Shadcn-Svelte components
- 🎨 Tailwind CSS for styling
- 📱 Responsive design
- 🔄 Real-time auth state management
- ⚡ Fast and lightweight

## Tech Stack

- **Frontend Framework:** SvelteKit
- **Backend/Auth:** PocketBase
- **UI Components:** Shadcn-Svelte
- **Styling:** Tailwind CSS
- **Form Handling:** Superforms
- **Validation:** Zod
- **Icons:** Lucide Svelte

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd sveltekit-poketbase-starter-template
```

2. Install dependencies:
```bash
npm install
```

3. Configure PocketBase:
   - Update the PocketBase URL in `src/lib/pocketbase.js`
   - Set up your PocketBase collections (users collection is required)

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── ui/          # Shadcn-Svelte components
│   │   └── Navigation.svelte
│   ├── pocketbase.js    # PocketBase configuration and auth utilities
│   └── utils.js         # Utility functions
├── routes/
│   ├── dashboard/       # Protected routes
│   ├── login/          # Authentication pages
│   ├── register/
│   └── +layout.svelte  # Root layout
```

## Authentication Flow

- **Login**: Users can log in using email and password
- **Register**: New users can create an account
- **Protected Routes**: Dashboard and other protected routes automatically redirect to login if not authenticated
- **Persistent Auth**: Authentication state persists across page reloads
- **Auto-redirect**: Logged-in users are redirected from auth pages to dashboard

## Usage

### Protected Routes
To create a protected route, add a `+layout.js` file with authentication check:

```javascript
import { redirect } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';

export function load() {
    if (!pb.authStore.isValid) {
        throw redirect(303, '/login');
    }
    return {};
}
```

### Authentication State
Access the current user state using the `currentUser` store:

```javascript
import { currentUser } from '$lib/pocketbase';
```

### Auth Functions
Available authentication utilities:

```javascript
import { login, register, logout, isLoggedIn } from '$lib/pocketbase';

// Login
await login(email, password);

// Register
await register(email, password, passwordConfirm);

// Logout
logout();

// Check auth status
if (isLoggedIn()) {
    // User is authenticated
}
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run format` - Format code with Prettier
- `npm run lint` - Run linting

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
