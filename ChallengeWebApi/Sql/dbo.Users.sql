CREATE TABLE [dbo].[Users] (
    [Id]          INT             IDENTITY (1, 1) NOT NULL,
    [FirstName]   NVARCHAR (50)   NULL,
    [LastName]    NVARCHAR (50)   NULL,
    [PhoneNumber] NVARCHAR (25)   NULL,
    [Salary]      DECIMAL (18, 2) NULL,
    [Version] TIMESTAMP NOT NULL, 
    CONSTRAINT [PK_dbo.Users] PRIMARY KEY CLUSTERED ([Id] ASC)
);



GO
/* Obsolete
CREATE TRIGGER [Trigger]
	ON [dbo].[Users]
	FOR DELETE, INSERT, UPDATE
	AS
	BEGIN
		SET NOCOUNT ON
		declare @total numeric(18,10) = (select SUM(Salary) s from dbo.Users);
		UPDATE USERS SET SalaryRatio = Salary / @total;
	END

	*/