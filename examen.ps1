Write-Host 'Dépendances' -ForegroundColor Blue

if (-Not( Test-Path node_modules)) {
    Write-Host '    - Installation débutées. Cela pourrait prendre quelques minutes.' -ForegroundColor Green
    npm install 2>&1>$null
    Write-Host '    - Dépendances installées.' -ForegroundColor Green
}
else {
    Write-Host '    - Dépendances déjà installées.' -ForegroundColor Green
}

Write-Host 'Raccourci' -ForegroundColor Blue

Write-Host '    - Création du raccourci.' -ForegroundColor Green

$HOST_NAME = HostName.exe
$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut("Site du cours.url")
$Shortcut.TargetPath = "http://$HOST_NAME/3t5-automatisation/"
$Shortcut.Save()

Write-Host '    - Raccourci créé.' -ForegroundColor Green

Write-Host 'Lancement du serveur. Cela pourrait prendre quelques minutes.' -ForegroundColor Blue

(npm run serve-examen -- --host $HOST_NAME) 2>&1>$null
