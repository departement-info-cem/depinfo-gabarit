@echo off

powershell -NoExit -executionpolicy remotesigned -command "cd %cd% | ./examen.ps1"
