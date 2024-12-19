# Frontend Service
The frontend service provides a user interface to display cryptocurrency trading data and manage subscriptions.

### Features
- Displays a list of live cryptocurrency trading pairs.
- Allows users to subscribe/unsubscribe to specific pairs.
- Updates subscribed data in real-time.

### File Structure
```
/frontend
  ├── src
  │   ├── components      # React components
  │   ├── hooks           # Custom hooks
  │   ├── App.tsx         # Main app component
  │   ├── Dockerfile      # Frontend container setup
  │   └── package.json    # Frontend dependencies
```

### Running the Frontend Locally
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the React app:
   ```bash
   npm start
   ```
4. Open the app in your browser at `http://localhost:3000`.
