// //----------Containers----------//

// * Microservices
// * Containers
// * Orchestration
// * Load balancers
// * Deployments

// ---> Microservices: Software architecture of loosely connected services. 
// ---> Monolith: Software architecture of tightly coupled services. 


//                            UBUNTU

//                            NodeJS
//  CONTAINERS  ---------->   MySQL
//                            Nginx
//                            Python

// 1- Light Weight
// 2- Portable
// 3- Easier for development
// 4- Easier to manage
// 5- Faster startup
// 6- Decouple application from infrastucture 

// //----------Orchestration----------//

// * Docker Swarm
// * Amazon EKS
// * Apache Mesos
// * AKS


//----------Load Balancers----------//

// ----------SCHEDULING ALGORITHMS----------

// 1- Round Robin 
// 2- IP Hashing 
// 3- Random Choice 
// 4- Least Connections 
// 5- Least Load

// upstream backend {
//     server backend1.example.com;
//     server backend2.example.com;
//     server 192.0.0.1 backup;
// }

// server {
//     location / {
//         proxy_pass http://backend;
//     }
// }