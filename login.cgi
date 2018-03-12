#!/usr/bin/env python

import cgi, os

DEFAULT_USERNAME    = ""
DEFAULT_PASSWORD    = ""
DEFAULT_NEXT_URL    = ""
DEFAULT_CURRENT_URL = os.environ.get("PATH_INFO", "")

CREDENTIALS = {
                  "mark185" : "dingdong",
                  "Bakta12" : "anything",
                  "s.spear" : "webdesign",
		  "guest1"  : "passWord1"
              }

def login_error(curr_url):
    return """\
<!DOCUMENT html>
<html>
    <head>
        <title>
            LOGIN ERROR
        </title>
    </head>
    <body>
        <h1>
            ERROR
        </h1>
        <p>
            Invalid credentials.  Cannot load login page at '%s'.
        </p>
    </body>
</html>""" % (curr_url)

form = cgi.FieldStorage()

username    = form.getvalue("username",    DEFAULT_USERNAME)
password    = form.getvalue("password",    DEFAULT_PASSWORD)
next_url    = form.getvalue("next_url",    DEFAULT_NEXT_URL)
current_url = form.getvalue("current_url", DEFAULT_CURRENT_URL)
next_page   = ""

#username    = "mark185"
#password    = "dingdong"
#next_url    = "/var/www/html/502/Structure/CourseProjectLogonPage.html"

if username in CREDENTIALS.keys():
    if password == CREDENTIALS[username]:
        try:
            with open(next_url, "r") as f:
                next_page = f.read()
        except Exception as e:
            next_page = """\
<!DOCUMENT html>
<html>
    <head>
        <title>
            ERROR
        </title>
    </head>
    <body>
        <h1>
            ERROR
        </h1>
        <p>
            Unable to find next URL at '%s'.
        </p>
    </body>
</html>""" % (next_url)
    else:
        try:
            with open(current_url, "r") as f:
                next_page = f.read()
        except Exception as e:
            next_page = login_error(current_url)
else:
    next_page = login_error(current_url)

next_page = "Content-type:  text/html\n\n" + next_page

print next_page
