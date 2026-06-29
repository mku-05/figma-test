#!/bin/bash

# Start the dev server in the background
npm run dev > vite.log 2>&1 &
SERVER_PID=$!

echo "Started dev server (PID: $SERVER_PID)"
echo "Waiting for server to be ready..."

# Wait for server to be ready
for i in {1..30}; do
  if curl -s http://localhost:5173 > /dev/null 2>&1; then
    echo "Server is ready!"
    break
  fi
  sleep 1
  if [ $i -eq 30 ]; then
    echo "Server failed to start in time"
    kill $SERVER_PID 2>/dev/null
    exit 1
  fi
done

# Capture screenshots
echo "Capturing screenshots..."
node capture-screenshots.js

# Stop the server
echo "Stopping server..."
kill $SERVER_PID 2>/dev/null
wait $SERVER_PID 2>/dev/null

echo "Done!"
