# Backend Service
The backend service provides the API and WebSocket server for the cryptocurrency dashboard. It interacts with the Binance API to fetch trading data and broadcasts updates to connected clients.

### Features
- REST API for fetching top 100 trading pairs.
- WebSocket server for real-time ticker updates.
- User-specific subscriptions for trading pairs.

### Endpoints
#### HTTP API
- `GET /`: Welcome message.
- `GET /trading-pairs`: Fetch the top 100 trading pairs.

#### WebSocket API
- **Connection**: `ws://localhost:8080`
- **Message Structure**:
  - Subscribe: `{ "action": "subscribe", "pair": "BTCUSDT" }`
  - Unsubscribe: `{ "action": "unsubscribe", "pair": "BTCUSDT" }`

### File Structure
```
/backend
  ├── src
  │   ├── controllers     # Controller logic
  │   ├── routers         # Route definitions
  │   ├── services        # Binance API and WebSocket handling
  │   ├── index.ts        # Entry point
  │   ├── Dockerfile      # Backend container setup
  │   └── package.json    # Backend dependencies
```

### Running the Backend Locally
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server:
   ```bash
   npm run dev
   ```
4. Access the API at `http://localhost:8000`.
