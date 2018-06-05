CREATE LOGIN ChallengeApp WITH PASSWORD = 'ABCD'
GO

Use UsersDB;
GO

IF NOT EXISTS (SELECT * FROM sys.database_principals WHERE name = N'ChallengeApp')
BEGIN
    CREATE USER ChallengeApp FOR LOGIN ChallengeApp
    EXEC sp_addrolemember N'db_owner', N'ChallengeApp'
END;
go
EXEC sp_addsrvrolemember 
    @loginame = N'ChallengeApp', 
    @rolename = N'sysadmin';

go