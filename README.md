# SvelteKit + PocketBase Authentication Template

A modern, production-ready authentication template built with SvelteKit and PocketBase. Features a complete authentication system with protected routes, persistent sessions, and a clean UI using Shadcn-Svelte components.

## 🚀 Features

- ✨ Complete authentication system (Login/Register/Logout)
- 🔒 Protected routes with automatic redirects
- 💾 Persistent authentication across page reloads
- 🎨 Modern UI with Shadcn-Svelte components
- 🎯 Form validation and error handling
- 📱 Fully responsive design
- 🔄 Real-time auth state management
- ⚡ Fast and lightweight

## 🛠️ Tech Stack

- **Frontend:** SvelteKit
- **Authentication:** PocketBase
- **UI Components:** Shadcn-Svelte
- **Styling:** TailwindCSS
- **Form Handling:** Superforms
- **Icons:** Lucide Svelte

## 📦 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sveltekit-pocketbase-auth-template
cd sveltekit-pocketbase-auth-template
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   - Update `PUBLIC_POCKETBASE_URL` in `.env.local` with your PocketBase instance URL

4. Set up PocketBase:
   - [Install PocketBase](https://pocketbase.io/docs/)
   - Create a new PocketBase project
   - Create a "users" collection with the following schema:
     - email (required, unique)
     - password (required)
     - emailVisibility (required, boolean)

5. Start the development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── ui/          # Shadcn-Svelte components
│   │   └── Navigation.svelte
│   ├── pocketbase.js    # PocketBase configuration
│   └── utils.js         # Utility functions
└── routes/
    ├── dashboard/       # Protected routes
    ├── login/          # Authentication pages
    ├── register/
    └── +layout.svelte  # Root layout
```

## 🔐 Authentication Flow

The template implements a complete authentication flow:

- **Login:** Email/password authentication
- **Register:** New user registration
- **Protected Routes:** Automatic redirects for unauthenticated users
- **Persistent Sessions:** Stay logged in across page reloads
- **Logout:** Secure session termination

## 💻 Usage

### Protected Routes
Create a protected route by adding a `+layout.js`:

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
Access the current user state:

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

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the built project to your preferred hosting platform
3. Set up your environment variables on your hosting platform

## 📝 Environment Variables

Required environment variables:

| Variable | Description | Example |
|----------|-------------|---------|
| PUBLIC_POCKETBASE_URL | Your PocketBase instance URL | https://your-pb-instance.com |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [SvelteKit](https://kit.svelte.dev/)
- [PocketBase](https://pocketbase.io/)
- [Shadcn-Svelte](https://www.shadcn-svelte.com/)
- [TailwindCSS](https://tailwindcss.com/)
