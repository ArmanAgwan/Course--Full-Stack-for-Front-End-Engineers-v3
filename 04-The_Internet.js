                                 //---------Internet Working---------//




/*
    How the intenet works
    Buying a domain
    putting it together
*/



                    // Terminology--------------

/*

    IP = Internet Protocol
    

    IPv4 = 8.8.8.8
    IPv6 = 2001:4860:4860:8888
*/    



               //------------Networks Tools Exercise-------------//

/*
    1:Check status of a network host
    // ping google.com

    2:Follow the path of your request
    // traceroute google.com

    3: Show network status
    // netstat -lt | less
*/



                   //-------------Internet & Networking Terminology------------//


/*
    TCP = Transmission control protocol
    UDP = User datagram protocol
    ICMP = Internet control message protocol
    packet = Unit of data transmitted over a network
*/

 

/*
    [   ]   SYN------>    
    [   ]   <-------SYN ACK     [ \\\\\\ ]
    [   ]   ACK------>            
    sender                       Reciver
*/

// UDP :- Is a one way. usefull for streaming video. it is faster

/*
    [    ]      <-------REQUEST
    [    ]      RESPONSE------>     [ \\\\\\\ ]
    [    ]      RESPONSE------>
    sender      RESPONSE------>       Reciver
*/


// DDoS attacks :- Distributed Denial-of-Service attack



              //----------------DNS & URL------------//


/*
    COMPUTER
   -----------  ----->TCP/IP-------> frontendmasters.com -------> server ??
    127.0.0.1
*/


// DNS : Domain Name System

// Domain name :- A Domain name is basically the name or address of the website that users type in URL to visit a website.

// Nameserver :- Hold DNS records to translate domain names into IP address


                       // DNS records 
/*
   1.) A record - Maps name to IP address
   2.) CNAME - Maps name to name
*/


// exercise DNS :-
/*
    Lookup the nameservers for an domain
    // nslookup frontendmasters.com

    Lookup the DNS records for a domain
    // dig frontendmasters.com

    View browser DNS cache
    // Chrome = chrome://net-internals/#dns
    // Firefox = about:networking#dns
*/


// Anatomy of a URL (diagram) 

// URL => uniform resource locator


/*           Subdomain           Path
    ------------------- -------------
    |                 | |           |
    blog.yourdomain.com/en/fullstack?test=true
                    ----            |        |
         |          tld |           |        |
         |              |           ----------
         |              |             query
         ----------------           parameter
             domain


subdomain => blog.yourdomain.com
path => /en/fullstack?test=true
tld => .com
domain => yourdomain.com
query parameter => test=true

*/

// tld => top level domain (own by company)



               //----------Buying a Domain Name-----------//


// Exercise

// www.namecheap.com (give you chepest domain name)

/*
    1.) Buy a domain with a registrar
    a.) update the nameserver to use Digital Ocean

    2.) on Digital Ocean, add two A records with your IP address
    =>  @
    =>  www
*/    



//--------------------Update & Restart Server---------------//



// Brand new server

/*
    1- Update software
    2- Restart your server
    3- create a new user
    4- make that user a *superuser*
    5- enable login for new user
    6- disable root login
*/


// updating and resatrting

/*
    1.) ssh into your server
    2.) update software
    // apt update
    // apt upgrade

    3.) Restart your server
    // shutdown now -r      // (-r = restart)
*/    



           //-------------------Create a User---------------//

// sudo

/*
    #

    root - highest permission level.
    Allows unrestricted access to
    the OS

    sudo - super user do. Allows you
    to run commands and programs as
    root
*/    

// creating and updating users

/*
    1- create a new user
    // adduser <your_username>

    2- add user to "sudo" group
    // usermod -aG sudo <your_username>

    3- switch user
    // su <your_username>

    4- check sudo access
    // sudo cat /var/log/auth.log
*/    