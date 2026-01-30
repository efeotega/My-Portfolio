# Firebase Hosting Deployment Guide

## Setup Steps

1. **Install Firebase CLI** (if not already installed):
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Initialize Firebase** (if needed):
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project or create a new one
   - Set public directory to: `out`
   - Configure as single-page app: Yes
   - Don't overwrite existing files

4. **Build and Deploy**:
   ```bash
   npm run deploy
   ```
   
   Or separately:
   ```bash
   npm run build
   firebase deploy
   ```

## Configuration Files

- **firebase.json**: Firebase hosting configuration
- **next.config.ts**: Configured for static export
- **.firebaserc**: Project configuration (update with your Firebase project ID)

## Important Notes

- Next.js is configured for static export (`output: 'export'`)
- Images are unoptimized for static hosting
- Build output goes to `out/` directory
- Firebase hosts from the `out/` directory

## Update .firebaserc

Edit `.firebaserc` and add your Firebase project:

```json
{
  "projects": {
    "default": "your-firebase-project-id"
  }
}
```
