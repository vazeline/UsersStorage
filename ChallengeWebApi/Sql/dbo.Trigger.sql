
-- this approach might be slow, use view instead

CREATE TRIGGER [Trigger]
	ON [dbo].[Users]
	FOR DELETE, INSERT, UPDATE
	AS
	BEGIN
		SET NOCOUNT ON
		declare @total numeric(18,10) = (select SUM(Salary) s from dbo.Users);
		UPDATE USERS SET SalaryRatio = Salary / @total;
	END