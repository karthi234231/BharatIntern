//getting express module
const express = require('express');
//getting path module
const path = require('path');
//getting body-parser module
const bodyParser = require('body-parser');
//connection to databse
const db = require('./configs/mongoose');
//connect to Schema
const list = require('./models/list');
//connect to post db
const BlogPost = require('./models/post');
// const BlogPost = require('./models/post');
const mongoose = require('mongoose');



//setting a port
const port = 5000;

const app = express();


// Parse URL-encoded bodies (for forms)
app.use(bodyParser.urlencoded({ extended: false }));
// Parse JSON bodies (for JSON data)
app.use(bodyParser.json());


//setting view engine ejs
app.set('view engine', 'ejs');
//connecting to views
app.set('views', path.join(__dirname, 'views'));
//setting static files
app.use(express.static('assets'));


let userEmail = "";
  
// Route to render the registration form
// Route to render the blog page
app.get('/', async function(req, res) {
    try {
        let pageTitle = "Blog page";
        const blogPosts = await BlogPost.find({});
        res.render('blog', {
            title: pageTitle,
            blogPosts,
        });
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        res.render('error', {
            title: "Error",
            message: "An error occurred while fetching blog posts.",
        });
    }
 });
 

app.get('/register', function(req,res){
    let pageTitle = "Register page";
    res.render('register',{
    title: pageTitle
});
});

// Route to render the login page
app.get('/login', function(req, res) {
    let pageTitle = "Login page";
    res.render('login', {
        title: pageTitle
    });
});

// Display a user's blog posts
app.get('/user-blog', async (req, res) => {
    const userBlogPosts = await BlogPost.find({ email: userEmail });
    res.render('user-blog', {
        title: "user blog",
        userBlogPosts });
});

app.get('/user-blog/edit/:post_id', async (req, res) => {
    try {
        const postId = req.params.post_id;
        const post = await BlogPost.findById(postId);

        if (!post) {
            // Handle the case where the blog post is not found
            return res.render('error', { title: 'Error', message: 'Blog post not found' });
        }

        res.render('edit-blog', { title: 'Edit Blog Post', post, postId });
    } catch (error) {
        console.error("Error fetching blog post for edit:", error);
        res.render('error', { title: 'Error', message: 'An error occurred while fetching the blog post for edit.' });
    }
});

app.post('/user-blog/delete/:post_id', async (req, res) => {
    if (req.query._method === 'DELETE') {
        try {
            const postId = req.params.post_id;
            // Perform your deletion logic here, e.g., using Mongoose
            await BlogPost.findByIdAndRemove(postId);

            // Redirect back to the user's blog page after deleting the post
            res.redirect('/user-blog');
        } catch (error) {
            console.error("Error deleting blog post:", error);
            res.redirect('/user-blog'); // Handle deletion error
        }
    } else {
        res.redirect('user-blog');
    }
});

app.post('/user-blog/edit/:post_id', async (req, res) => {
    try {
        const postId = req.params.post_id;
        const { title, author, image, content } = req.body;

        // Update the blog post in the database
        await BlogPost.findByIdAndUpdate(postId, { title, author, image, content });

        res.redirect('/user-blog');
    } catch (error) {
        console.error("Error updating blog post:", error);
        res.render('error', { title: 'Error', message: 'An error occurred while updating the blog post.' });
    }
});

app.post('/user-blog', (req, res) => {
    const { title, author, image, content, email } = req.body;
  
    // Create a new Blog document and save it to the database
    const newBlog = new BlogPost({ title, author, image, content, email });
    newBlog.save()
      .then(() => {
        console.log('New blog added to the database');
        res.redirect('/user-blog');
      })
      .catch((error) => {
        console.error(error);
        res.redirect('/user-blog'); // Redirect back to the form
      });
  });






// Route to handle form submission and store data in mongodb
app.post('/register', async function(req, res) {
    try {
        const registerDetails = req.body;
         // Create a new task in the database
        await list.create(registerDetails);
        //redirect to login.ejs
        res.redirect('/login'); 
    } catch (error) {
        console.error("Error adding data:", error);
        res.redirect('/register');
    }
});
  
// Route to handle form submission and validate login
app.post('/login', async function(req, res) {
    try {
        const { email, password } = req.body;

        // Query the database to find a user with the given username and password
        const user = await list.findOne({ email, password });

        if (user) {
            // Successful login, redirect to a dashboard or another page
            userEmail = email;
            res.redirect('/user-blog');
        } else {
            // Failed login, render the login page with an error message
            res.render('login',{
                title: "error"
            });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.redirect('/login');
    }
});





//runs when the server starts
app.listen(port, function(err){
        if(err){
            // encountered an error
            console.log("we have an error on loading server");
        }
        //running without aany error
        console.log("the server is working on port: ",port);
});