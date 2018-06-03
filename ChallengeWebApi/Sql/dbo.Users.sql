CREATE TABLE [dbo].[Users] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [FirstName]   NVARCHAR (50) NULL,
    [LastName]    NVARCHAR (50) NULL,
    [PhoneNumber] VARCHAR (25)  NULL,
    [Salary]      DECIMAL (18, 2)  NULL,
    [SalaryRatio] DECIMAL (18, 10)  NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
CREATE TRIGGER [Trigger]
	ON [dbo].[Users]
	FOR DELETE, INSERT, UPDATE
	AS
	BEGIN
		SET NOCOUNT ON
		declare @total numeric(18,10) = (select SUM(Salary) s from dbo.Users);
		UPDATE USERS SET SalaryRatio = Salary / @total;
	END