use UsersDB
go

Create VIEW [dbo].v_Users
	AS 
	SELECT [Id],[FirstName],[LastName],[PhoneNumber],[Salary],[Version], Salary / TotalSalary as SalaryRatio 
	FROM dbo.Users join (select sum(Salary) TotalSalary from dbo.Users) t on 1=1
