@echo off
title Push DHARUN-PORTFOLIO to GitHub
echo ========================================================
echo Pushing DHARUN-PORTFOLIO to GitHub...
echo Remote: https://github.com/Dharun-135/DHARUN-PORTFOLIO.git
echo ========================================================
set PATH=C:\Users\Admin\AppData\Local\Programs\Git\cmd;%PATH%
git push -u origin main
if %ERRORLEVEL% equ 0 (
    echo.
    echo ========================================================
    echo SUCCESS! Your portfolio code is published at:
    echo https://github.com/Dharun-135/DHARUN-PORTFOLIO
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo If prompted, sign in with your GitHub account in the
    echo browser or paste your GitHub Personal Access Token.
    echo ========================================================
)
pause
