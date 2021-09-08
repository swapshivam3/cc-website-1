For frontend people,

First startup:
1. Use "python -m venv env" to create a virtual environment
2. Use "source env/bin/activate" to activate the virtual environment
3. "pip install -r requirements.txt" to install the required packages

Running the server,
1. Delete db.sqlite3 if any (as changes keep on occuring in the models)
2. "python manage.py makemigrations"
3. "python manage.py migrate --run-syncdb"
4. "python manage.py runserver" The default port is 8000

Current Endpoints:
1. localhost:8000/main-api/FeedbackPost
    a. GET request for Member User types to access all submissions to Feedback
    b. POST request for All User Types to fill the form, only parameter is {"review":"Review data"}
2. localhost:8000/main-api/departments 
    a. GET request to access all departments and their current members
3. localhost:8000/main-api/departments?name=XX
    a. GET request for namewise department access, XX=cp,fe,be,ap,ui
4. localhost:8000/main-api/achievements/
    a. GET request to get achievements (Not sure if it is working)
5. localhost:8000/user-api/VisitorRegistration/
    a. (FOR DEBUGGING ONLY) GET request to get list of current users registered as visitors
    b. POST request to register a user
    {
        "email":"",
        "name":"",
        "password":"",
        "city":"",
        "phone":"",
        "interests":""
    }
6. localhost:8000/user-api/VisitorUpdate
    a. POST request as a logged in Visitor (accesss restricted)
    {
        "city":"",
        "phone":"",
        "interests":""
    }
7. localhost:8000/user-api/MemberRegistration
    a. (FOR DEBUGGING ONLY) GET request to get list of current users registered as members
    b. POST request to register a user
    {
        "email":"",
        "name":"",
        "password":"",
        "bits_id":"",
        "bits_email":"",
        "github":"",
        "codeforces_id":"",
        "linked_in":"",
        "summary":""
    }
    The bits_id field and bits_email field have validators to check if info is legitimate.
8. localhost:8000/user-api/MemberUpdate
    a. POST request as a logged in Member (accesss restricted)
    {
        "bits_id":"",
        "bits_email":"",
        "github":"",
        "codeforces_id":"",
        "linked_in":"",
        "summary":""
    }
9. localhost:8000/user-api/CandidateRegistration
    Underwork
10. localhost:8000/user-api/LoginView
    a. POST request to login the user
    {
        "email":"",
        "password":""
    }
11. localhost:8000/user-api/LogoutView
    a. GET request to logout the user
12. localhost:8000/user-api/RequestPasswordReset
    a. POST request to generate an email with password reset link
    {"email":""}
13. localhost:8000/user-api/PasswordReset/<uidb64>/<token>
    a. The link sent by the above method, is a GET request which gives response if token is valid or invalid
14. localhost:8000/user-api/PasswordResetComplete
    a. PUT request to reset the password
    {
        "password":"",
        "uidb64":"",
        "token":""
    }
