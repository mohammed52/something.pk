@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\js-beautify-ejsx\js\bin\js-beautify.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\js-beautify-ejsx\js\bin\js-beautify.js" %*
)