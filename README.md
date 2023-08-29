## Assignment Title: Building a Cookie-Based Web App with Next.js 13

## Assignment Description:

## In this assignment, you will create a simple web application using Next.js 13 that uses cookies to store user preferences, responds with JSON data, and handles redirection and header modification.

- Assignment Requirements:

=> Setting Cookies:

## Create a Next.js project using version 13.

- Implement a route that sets a cookie when a user clicks a button. The cookie should store a user preference, e.g., "theme: dark" or "language: en".

## Reading Cookies:

- Implement another route that reads the user's preference cookie and displays it on the page.

## JSON Response:

- Create a route that returns a JSON response with the following data:

{

"message": "Welcome to our API!",

"version": "1.0"

}

## Redirection:

- Implement a route that redirects the user to a different page within your application using NextResponse.redirect().

## Header Modification:

- Create a route that accepts an incoming request with an "Authorization" header.

- Extract the token from the header, prefix it with "Bearer ", and add it as a new "Authorization" header.

- Use NextResponse.next() to produce the response.

## Styling: Feel free to style with any of the CSS framework
