-- RedefineIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);
DROP INDEX `users_email_key` ON `User`;
