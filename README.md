# Overall Project README

## Real-Time Cryptocurrency Dashboard
This project is a real-time cryptocurrency dashboard that uses Binance API to fetch and display trading pairs and ticker data. It consists of a **backend** (Node.js and Express.js) and a **frontend** (React) application. The backend also includes WebSocket functionality to provide live updates to clients.

### Features
- Displays live ticker data for cryptocurrency pairs.
- Allows users to subscribe/unsubscribe to specific trading pairs.
- Provides real-time updates via WebSocket.
- Built with Docker for easy deployment.

### Tech Stack
- **Backend**: Node.js, Express.js, WebSocket, TypeScript
- **Frontend**: React, Material-UI, TypeScript
- **API**: Binance API
- **Containerization**: Docker, Docker Compose

### File Structure
```
/project-root
  ├── backend       # Backend service
  ├── frontend      # Frontend service
  ├── docker-compose.yml  # Docker orchestration
  └── README.md     # Overall project documentation
```

### Running the Project
#### Prerequisites
- Docker and Docker Compose installed on your system.

#### Steps
1. Clone the repository.
2. Build and run the services using Docker Compose:
   ```bash
   docker-compose up --build
   ```
3. Access the application:
   - **Frontend**: `http://localhost:3000`
   - **Backend API**: `http://localhost:8000`
   - **WebSocket**: `ws://localhost:8080`
