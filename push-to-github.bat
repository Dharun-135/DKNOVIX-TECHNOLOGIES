@echo off
title Push DKNOVIX TECHNOLOGIES to GitHub
color 0C
cls
echo ====================================================================
echo             DKNOVIX TECHNOLOGIES - GITHUB UPLOAD ASSISTANT
echo ====================================================================
echo.
echo Remote Repository: https://github.com/Dharun-135/DKNOVIX-TECHNOLOGIES
echo.
set /p TOKEN="PASTE YOUR GITHUB TOKEN (starts with ghp_): "

echo.
echo Uploading latest commits to GitHub...
"C:\Users\Admin\AppData\Local\Programs\Git\cmd\git.exe" push https://Dharun-135:%TOKEN%@github.com/Dharun-135/DKNOVIX-TECHNOLOGIES.git main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ====================================================================
    echo SUCCESS! All files have been uploaded to GitHub!
    echo Repository: https://github.com/Dharun-135/DKNOVIX-TECHNOLOGIES
    echo.
    echo Your site is live at:
    echo https://dharun-135.github.io/DKNOVIX-TECHNOLOGIES/
    echo ====================================================================
) else (
    echo.
    echo [ERROR] Upload failed. Please check your token.
)
echo.
pause
