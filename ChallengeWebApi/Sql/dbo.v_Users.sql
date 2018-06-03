CREATE VIEW [dbo].v_Users
	AS 
	SELECT dbo.Users.*, Salary / TotalSalary as SalaryRatio 
	FROM dbo.Users join (select sum(Salary) TotalSalary from dbo.Users) t on 1=1
