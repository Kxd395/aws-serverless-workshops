Error handling:

* [] Invalid identity pool - logging in should show an error that your identity
pool ID is bad. JS console message currently

* [] Federation not configured - If you don't configure the federation, it currently doesn't throw
any error so kinda looks like login worked. JS console message currently

* [] Invalid or wrong FB id - logging in should show an explicit helpful error
that your FB ID is wrong. Throws error in the JS console but no UI error.

* [] Invalid API URL – we should have some error in the console if the API
returns an error or doesn't exist.

* [] Bad submission - If you don't fill in the comments field, the backend
throws an error because it's a null Dynamo field. We should do both frontend
and backend validation on the form data.

* [] URL Routing - currently the app changes the url as you navigate, but those
URLs are invalid. We should use hash-based URLs and pick them up if you
refresh the page.


READMEs

* [] Write instructions for Console
* [] Write instructions for API
* [] Write instructions for CloudFormation
* [] Add screenshots
