@echo off
title Push DHARUN-PORTFOLIO to GitHub
color 0C
cls
echo ====================================================================
echo             DKNOVIX TECHNOLOGIES / DHARUN-PORTFOLIO
echo                     GITHUB UPLOAD ASSISTANT
echo ====================================================================
echo.
echo Your GitHub repository is currently EMPTY at:
echo https://github.com/Dharun-135/DHARUN-PORTFOLIO
echo.
echo GitHub requires an authorization token to allow uploads.
echo If you don't have a token, generate one in 10 seconds at:
echo https://github.com/settings/tokens/new?scopes=repo^&description=Portfolio
echo.
echo ====================================================================
set /p TOKEN="PASTE YOUR GITHUB TOKEN HERE (starts with ghp_): "
echo ====================================================================
echo.
echo Uploading all 54 files to GitHub...
"C:\Users\Admin\AppData\Local\Programs\Git\cmd\git.exe" push https://Dharun-135:%TOKEN%@github.com/Dharun-135/DHARUN-PORTFOLIO.git main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ====================================================================
    echo SUCCESS! All files have been uploaded to GitHub!
    echo Repository: https://github.com/Dharun-135/DHARUN-PORTFOLIO
    echo.
    echo GitHub Actions is now automatically building your live site.
    echo In about 60 seconds, your site will be live at:
    echo https://dharun-135.github.io/DHARUN-PORTFOLIO/
    echo ====================================================================
) else (
    echo.
    echo [ERROR] Upload failed. Please check that your token was copied
    echo correctly and has the 'repo' permission checked.
)
echo.
pause
