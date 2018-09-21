echo "清理项目开始"


echo "开始清理Debug目录"
del /s /q "Debug/"
rd "Debug/" /s /q 

echo "开始清理Release目录"
del /s /q "Release/"
rd "Release/" /s /q 

echo "开始清理GeneratedFiles目录"
del /s /q "GeneratedFiles/"
rd "GeneratedFiles/" /s /q 

echo "开始清理Win32目录"
del /s /q "Win32/"
rd "Win32/" /s /q 


echo "清理结束"

pause