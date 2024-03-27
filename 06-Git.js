//                   //----------GIT----------//


// 1- Create a git repository.
// 2- Create an SSH key called gh_key.
// 3- Add the SSH key to GitHub.
// 4- Add remote repo.
// 5- Ensure new SSH key is used. 
// 6- Push local repository to GitHub. 


//                   //---------Version Control----------//


// Version control : Record changes to a file system to
//                   preserve history. 

// 1- git
// 2- Subversion
// 3- mercurial   


//                    //----------GIT----------//


// 1- Ensure git uses your new ssh key. 
// // vi ~/.ssh/config

// 2- Change permission of config to 600.
// // chmod 600 ~/.ssh/config

// 3- Change permission of gh_key to 600.
// // chmod 600 ~/.ssh/gh_key


//                   //----------In case you stuck----------//


// 1- Stop a running process. 
// // pkill<process>

// 2- Test your ssh connection. 
// // ssh -vT git@github.com

// 3- Save a readonly file in vim. 
// // :w !sudo tee %

// 4- view permissions as numbers. 
// // stat -c %a <file_name>