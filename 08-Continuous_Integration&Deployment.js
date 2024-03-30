// //----------Continuous Intergation----------//

// *CI/CD
// *Shell Scripting
// *Cron

// --> Continuous Integration (CI): Code changes are validated and merged back into main branch
//                                  as often as possible.
                                 
// --> Continuous Delivery (CD): Code changes are automatically built are ready for 
//                               production.
                              
// --> Continuous Deployment: Builds are automatically deployed to production
//                            environments.    
                           
                           
//            //----------CI/CD----------//

//  Continuous Integration

//                                                                   MANUAL
//                                                                     |
//     BUILDS --- TEST ---------- ACCEPTANCE ----- DEPLOY TO ----- DEPLOY TO -----> SMOKE TESTS
//                                   TEST           STAGING        PRODUCTION



//     BUILDS --- TEST ---------- ACCEPTANCE ----- DEPLOY TO ----- DEPLOY TO -----> SMOKE TESTS
//                                   TEST           STAGING        PRODUCTION   
                                  
                                  
//             //----------Cron----------//

// Cron: Executes commands on a schedule.   


//            //-----Shell Scripting-----//


// #! /usr/bin/bash

// now=$(date +"%r")
// read -p "What is your name? " name
// echo "The time is $now. Have a wonderful day $name"


// //-----//

// 1- Create a bash script that git pulls from main branch. 
// 2- Create a cron job to execute script every 2 minutes.


// //----------Logging, Streams & Redirection-----------//

// //-----Driving into your terminal-----//

// * Logs and How to read them
// * Standard streams
// * Redirection
// * Finding things

// //-----VAR/LOG-----//

// * syslog
// * auth.Log
// * nginx/access.log


// --> tail: Output the last part of a File
// --> head: Output the first part of a File
// --> less: Output one page at time
// --> cat:  Output entire file


//           //-----Standard Streams-----//

// * standard Output
// // stdout

// * standard input
// // stdin

// * standard error
// // stderr


//          //-----Redirection-----//

// * |
// // read from stdout

// * >
// // write stdout to file

// * >>
// // append stdout to file

// * <
// // read from stbin

// * 2>&1
// // redirect both stderr and stdout


// //-----Finding Things-----//

// * find
// * grep

// ---> find: search file names
// ---> grep: search file contents


// //-----Finding Things-----//

// $ find /bar -name foo.text
//     |    |     |     |
//   find  direc  Opt   file/folder


//            //-----FIND-----//


// 1- Find all logs files in /var/log
// // find /var/log -type f -name "*.log"

// 2- Find all directories with the name log
// // find / -type d -name log


//           //-----GREP-----//


// $ grep -i 'jem' /var/www          
//    |    |   |       |
//   grep  opt search  directory


// Finding running node processes
// // ps aux | grep node  


//          //----------Nginx----------//

    
// * Nginx Redirection
// * Gzip
// * Subdomains 

//         //-----Gzip-----//

// ##
// # Gzip Settings
// ##

// gzip on;            /etc/ngnix.conf

// # gzip_vary on;
// # gzip_proxied any;
// # gzip_comp_level 6;
// # gzip_buffers 16 8k;
// # gzip_http_version 1.1;


//        //----------Subdomain----------//

// 1- Create a subdomain called "blog"       
//   a- Create an A record
//   b- Create a server

// 2- Update ngnix.conf
// 3- Restart ngnix  

// server {
//   listen 80;
//   listen [::]:80;
//   server_name blog.<your_domain>;

//   location / {
//     proxy_pass http://localhost:3000;
//   }
// }




