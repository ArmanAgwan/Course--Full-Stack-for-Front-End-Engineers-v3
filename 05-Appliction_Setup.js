//-------------------Setup Nginx Web Server----------------//

// -----WEB SERVER------//

// 1- APACHE
// 2- NGINX



/*
    1- web server
    2- Reverse proxy                   
    3- Forward proxy                 (engine-x)
*/



/*                 
                                                              SERVER
                                                            |---------|
                                                            |         |
                                                            |---------|


                            SERVER                        
        REQUEST             |-----|                     Application
    -------------->         |     |    
                            |-----|                     
                                                            database
*/


/*                 
                                                              server
                                                            |---------|
                                                            |         |
                                                            |---------|


                            server                        
        request          |---------|                        Application
    ---------------->>   |         | ---->> nginx --->>    
                         |---------|                     
                                                            daatabase

nginx flow => server, application database                                                            
*/


// Nginx
/*
    1- Install nginx

    // sudo apt install nginx

    2- Start nginx

    // sudo service nginx start

    3- Navigate to your server in the browser!
    then type ip address

    // 127.0.0.1
*/


/*
    // ---Nginx congigration----//

     1- View default nginx configuration

    //  less /etc/nginx/sites-available/default
*/


//---------------Nginx configration---------------//

/*
    root /var/www/html; <--------- base directory for requests

    # Add index.php to the list if you are using PHP
    index index.html index.htm index.nginx_dibian.html;

    server_name _;

    location / {
        # first attempt to serve request as file, then
        # as directory, then fall back to displaying a 404.
        try_files $uri/ =404;
    }
    // try_files    => directive
*/

//-----Nginx configration-------//

/*
    1- Create and edit default page.

    // sudo vi /var/www/html/index.html

    // terminal

    cd /var/www/html/
    ls      // index.nginx-debian.html
    sudo vi index.html  // (type - anything)

    going to browser 127.0.0.1 and refresh
    show => Hello world
    
*/    


/*
    // Node.JS

    request ---->> server ----->> nginx ----->> Node.js
*/

// ----Node.js----//

/*
    1- Link to newest node.js source
    // curl https://deb.nodesource.com/setup_19.x |
    sudo -E bash -

    2- install node.js
    // sudo apt-get install nodejs

    3- install git
    // sudo apt install git
*/    



//----------------------Setup Proxy Pass-------------------//

/*

    curl https://deb.nodesource.com/setup_19.x | sudo -E bash -
    sudo apt-get install nodejs
    node --version      // v19.7.0
    git
*/


//-------Applcation Setup----//

/* 
    1- Establish application file system
    2- Enable version control
    3- Create a node.js server
*/

/*
    1-Change ownership of /www

    // Sudo chown -R $USER:$USER /var/www

    2- Make an application directory

    // mkdir /var/www/app

    3- initialize empty git repo in /app
    
    // git init
*/
