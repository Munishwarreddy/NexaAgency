# MediaManager4U Setup Script for PowerShell (Windows)

Write-Host ""
Write-Host "======================================"  -ForegroundColor Cyan
Write-Host "  MediaManager4U - Complete Setup"    -ForegroundColor Cyan
Write-Host "======================================"  -ForegroundColor Cyan
Write-Host ""

# Setup Frontend
Write-Host "[1/4] Setting up Frontend..." -ForegroundColor Yellow
Push-Location frontend
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error installing frontend dependencies!" -ForegroundColor Red
    exit 1
}
Pop-Location
Write-Host "✅ Frontend setup complete!" -ForegroundColor Green
Write-Host ""

# Setup Backend
Write-Host "[2/4] Setting up Backend..." -ForegroundColor Yellow
Push-Location backend
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error installing backend dependencies!" -ForegroundColor Red
    exit 1
}
Pop-Location
Write-Host "✅ Backend setup complete!" -ForegroundColor Green
Write-Host ""

# Create .env if it doesn't exist
Write-Host "[3/4] Checking backend .env file..." -ForegroundColor Yellow
if (!(Test-Path "backend\.env")) {
    Copy-Item "backend\.env.example" "backend\.env"
    Write-Host "✅ .env file created!" -ForegroundColor Green
} else {
    Write-Host "✅ .env file already exists!" -ForegroundColor Green
}
Write-Host ""

Write-Host "[4/4] Setup Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "======================================"  -ForegroundColor Cyan
Write-Host "  Next Steps:"                         -ForegroundColor Cyan
Write-Host "======================================"  -ForegroundColor Cyan
Write-Host ""
Write-Host "1️⃣  Open PowerShell Terminal 1:" -ForegroundColor White
Write-Host "   cd frontend" -ForegroundColor Gray
Write-Host "   npm run dev" -ForegroundColor Gray
Write-Host "   (Frontend will run on http://localhost:3000)" -ForegroundColor DarkGray
Write-Host ""
Write-Host "2️⃣  Open PowerShell Terminal 2:" -ForegroundColor White
Write-Host "   cd backend" -ForegroundColor Gray
Write-Host "   npm run dev" -ForegroundColor Gray
Write-Host "   (Backend will run on http://localhost:5000)" -ForegroundColor DarkGray
Write-Host ""
Write-Host "3️⃣  Open your browser:" -ForegroundColor White
Write-Host "   http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "======================================"  -ForegroundColor Cyan
Write-Host ""
