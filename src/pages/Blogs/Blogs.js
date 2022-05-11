import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container mt-3 blogs-container'>
            <div>
                <h2>1. Difference between JavaScript and Node Js?</h2>
                <p className="px-4 text-justify" >NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.<br /><b>Javascript is a programming language that is used for writing scripts on the website.</b>
                    <small className='px-3'>Or</small> <b>NodeJS is a Javascript runtime environment. </b>
                    <br /><b>	Javascript can only be run in the browsers.</b>
                    <small className='px-3'>Or</small> <b>We can run Javascript outside the browser with the help of NodeJS. </b>

                </p>

            </div>

            <div>
                <h2>2. When should you use nodejs and when should you use mongodb?</h2>
                <p className="px-4 ">Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too. MongoDB is a database engine. Code within some application or server uses MongoDB to save, query, or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc... These two technologies are for different parts of a typical web server system. You don't substitute one for the other. Instead, you can use them together.
                </p>
            </div>

            <div>
                <h2>3. Differences between sql and nosql databases?</h2>
                <p className="px-4">When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision. <br /><b>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</b>
                    <small className='px-3'>Or</small> <b>Non-relational or distributed database system.</b>
                    <br /><b>	These databases are not suited for hierarchical data storage.</b>
                    <small className='px-3'>Or</small> <b>These databases are best suited for hierarchical data storage. </b>
                    <br /><b>These databases are best suited for complex queries</b>
                    <small className='px-3'>Or</small> <b>These databases are not so good for complex queries</b>
                    <br /><b>	These databases have fixed or static or predefined schema</b>
                    <small className='px-3'>Or</small> <b>They have dynamic schema </b>
                </p>
            </div>
            <div>
                <h2>4. What is the purpose of jwt and how does it work</h2>
                <p className="px-4">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
                </p>
            </div>
        </div>
    );
};

export default Blogs;