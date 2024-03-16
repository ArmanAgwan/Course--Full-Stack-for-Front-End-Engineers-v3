
                                     //-----Operating System------//



//  Operating System = An operating system is the program that
//                     after being initially loaded into the computer by a boot program
//                     manages all of the other application programs in a computer.//


/*
1- User
2- Shell
3- Kernel
4- hardware  



                           //--------Security & Hashing---------//




/*
1- Username amd password
2- Biometric
3- SSH key 



/*
123456, 123456789, qwerty, password, 12345, qwerty123, 1q2w3e, 12345678,
111111, 1234567890
X => p@ssword12
p_#s2!$DR   (right)     */

                     //-------------Setup SSH Keys for Login---------------//


// SSH = public key encryption

/*

    SSH key pair :-
    a.) public key
    b.) private key

SSH = secure socket shell (it's just means how we connect to a server in a secure way.)




/*
    your computer                       server
  -----------------                  -------------

    prrivate key   <---------------    public key
     (secret)

                    encrypted message

     password      --------------->     Encrypted

*/



// SSH key exercise - 1 -

/*
    1.) Move into the ~/.ssh directory
    2.) Generate a key using ssh-keygen
    3.) Name your key "fsfe"
*/    


// (exercise - 2)
/*
    ~ temp cd ~/.ssh
    ~ .ssh ls
    ~ .ssh rm -rf fsfe*
    ~ .ssh ls
    ~ .ssh clear

    ~ .ssh ssh-keygen
    // generating public/private rsa key pair
    // Enter file in which to save the key (/User/toshif/.ssh/id_rsa): fsfe

    ~ .ssh cat fsfe.pub         // => show the public key

    ESC :- exit screen
*/



/*
    .ssh ls | grep fsfe
  fsfe <----------------  private key
  fsfe.pub <------------  public key
  
  1.) Copy the public key into Digital Ocean
  2.) Finish setting up the server
*/

// terminal 
    // ~ ssh ls | grep fsfe
    // ~ fsfe
    // ~ fsfe.pub
    // ~ .ssh cat fsfe.pub



// Login exercise :-

    // 1- ssh into your server
    // // ssh root@<your_IP>

    // 2- ssh into your server your private key
    // // ssh -i ~/.ssh/fsfe root@<your-IP>

    // 3- Exit your server
    // // exit




                    //----------------SSH key Recap--------------//


// SSH key


    // 1- Move ito the ~/.ssh directory
    // // cd ~/.ssh

    // 2- Generate a key using ssh-keygen
    // // ssh-keygen
