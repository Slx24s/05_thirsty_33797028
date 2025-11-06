// Create a new router
const express = require("express");
const router = express.Router();

var shopData = {
    shopName: "Juicy drinks",
    productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
    shopLocations: [
        { manager: "Sarah Johnson", address: "123 High Street, Manchester, M1 1AA" },
        { manager: "David Chen", address: "45 Queen's Road, London, SW1A 1AA" },
        { manager: "Emma Williams", address: "78 Park Lane, Birmingham, B1 1BB" },
        { manager: "Michael Brown", address: "22 Castle Street, Edinburgh, EH1 2NG" }
    ]
};

// Handle the main routes
router.get('/',function(req,res){
    res.render('index.ejs', shopData)
 });


router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
}); 

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData);
});

router.get('/search_result', function(req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});

router.get("/register", (req, res) => {
    res.render("register.ejs", shopData);
});

router.post("/registered", (req, res) => {
    res.send(' Hello ' + req.body.first + ' ' + req.body.last + ', you are now registered! We will send an email to: ' + req.body.email);
});

router.get("/survey", (req, res) => {
    res.render("survey.ejs", shopData);
});

router.post("/survey_results", (req, res) => {
    // Check if student checkbox was checked
    const isStudent = req.body.student === 'yes' ? 'Yes' : 'No';
    
    // Build a nice response page
    let responseHTML = `
    <!doctype html>
    <html>
    <head>
        <title>Survey Results - ${shopData.shopName}</title>
        <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
        <div class="container">
            <h1>Thank You for Your Feedback!</h1>
            <h2>Survey Results</h2>
            <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-top: 20px;">
                <p><strong>Name:</strong> ${req.body.first} ${req.body.surname}</p>
                <p><strong>Email:</strong> ${req.body.email}</p>
                <p><strong>Age:</strong> ${req.body.age}</p>
                <p><strong>Preferred Drink Category:</strong> ${req.body.category}</p>
                <p><strong>Student Status:</strong> ${isStudent}</p>
            </div>
            <p style="margin-top: 30px; text-align: center;">
                <a href="/" style="color: #0891b2; text-decoration: none; font-weight: 600;">← Back to Home</a>
            </p>
        </div>
    </body>
    </html>
    `;
    
    res.send(responseHTML);
});

// Export the router object so index.js can access it
module.exports = router;