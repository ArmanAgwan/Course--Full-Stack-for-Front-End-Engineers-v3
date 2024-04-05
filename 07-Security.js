//             //----------SECURITY----------//

// * Access Control. 
// * Securing Applications. 
// * Firewalls. 
// * Permissions. 
// * Updating Software.

//            //-----Read auth log
// sudo cat /var/log/auth.log


// * SSH
// * Firewalls
// * Updates
// * Two factor authentication
// * VPN

// //----------View open ports with nmap----------//

// PORT: Communication endpoint that maps to specific
//       process or network service. 

// //-----See well known ports
// less /etc/services                            

//             //----------nmap----------//     -----> network mapper 


// 1- Install nmap
// // sudo apt install namp                

// 2- Run nmap
// // nmap <your_server_ip>

// 3- Extra service/version information
// // nmap -sV <your_server_ip>


//           //----------Firewall & ufw----------//

// Firewall: A network security device that monitors incoming and outgoing
//           network traffic and decides whether to allow or block or
//           block specific traffic based on a defined set of security rules. 
 

//           //----------ufw----------//


// ufw: Uncompilicated firewall.

// //---Commands---//

// * http
// * https
// * $ ufw allow SSH
// *       deny
// *       reject


// 1- Check firewall status. 
// // sudo ufw status

// 2- Allow ssh 
// // sudo ufw allow ssh

// 3- Allow http
// // sudo ufw allow http

// 4- Enable firewall
// // sudo ufw enable


//          //----------Permissions & chmod----------//


// //---Permission---//

//  owner      group      everyone 
//                         else
//   rwx        rwx         rwx         Read         4
// (4+2+1)    (4+2+1)     (4+2+1)       Write        2
//    7          7           7          eXecute      1

//          //----------Applications updates----------//


// 1- Install unattended upgrades
// // sudo apt install unattended-upgrades

// 2- Enables upgrades
// // sudo dpkg-reconfigure --priority=low unattended-upgrades