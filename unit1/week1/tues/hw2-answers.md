you can use the git init to setup a repo in your folder.
git add will start to track your file
git commit will move files from staging to your local repo.

git pull origin master   pulls changes from master repo into your local repo
git reset   unstages a file
git checkout -- <target>  reverts file back to how they were after a commit    
-- allows for checkout to be attached to a destination regardless of whether parameters are added
you may want to reset to a previous commit if your current commit breaks or losses efficiency

git branch name_here   creates a new branch. git branch   shows all branches in git
git checkout name_here   switches to specified branch
we may want to creat a separate branch from the master so that we can experiment with changes to our original code without putting our master copy in jeaporady.

use git merge when you are merging your branch to a current branch. request a pull when the code you're merging into has been updated. 
to push your work to your remote repo, use: git push origin <branch name>
