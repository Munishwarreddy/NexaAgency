@echo off
REM MediaManager4U Setup Script for Windows

echo.
echo ======================================
echo  MediaManager4U - Complete Setup
echo ======================================
echo.

REM Setup Frontend
echo [1/4] Setting up Frontend...
cd frontend
call npm install
if errorlevel 1 (
    echo Error installing frontend dependencies!
    exit /b 1
)
cd ..
echo Frontend setup complete!
echo.

REM Setup Backend
echo [2/4] Setting up Backend...
cd backend
call npm install
if errorlevel 1 (
    echo Error installing backend dependencies!
    exit /b 1
)
cd ..
echo Backend setup complete!
echo.

REM Create .env if it doesn't exist
if not exist "backend\.env" (
    echo [3/4] Creating backend .env file...
    copy backend\.env.example backend\.env
    echo .env file created!
) else (
    echo [3/4] .env file already exists!
)
echo.

echo [4/4] Setup Complete!
echo.
echo ======================================
echo  Next Steps:
echo ======================================
echo.
echo 1. Open Terminal 1:
echo    cd frontend
echo    npm run dev
echo    (Frontend will run on http://localhost:3000)
echo.
echo 2. Open Terminal 2:
echo    cd backend
echo    npm run dev
echo    (Backend will run on http://localhost:5000)
echo.
echo 3. Open http://localhost:3000 in your browser
echo.
echo ======================================
echo.
pause
