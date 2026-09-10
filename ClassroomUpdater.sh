#!/usr/bin/env bash
set -e

# Backend 
cd backend/dlClass.API
dotnet restore

# Back to root
cd ../..

# Frontend
cd frontend
npm install