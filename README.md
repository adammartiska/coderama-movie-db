## Short sumarry

This project is simple movie database, where you can search for any movies you like. Movies are fetched from free OMDB API. On the search page there is infinite scroll mechanism implemented -> when there are more data once you hit the bottom of the page, the next data is fetched. There is also scroll restoration implemented - when you scroll the movies, then go to the favorites page and back your scroll position should be right where you left it. There is a possibility to mark a movie as favorite, then it is displayed under "Favorites" once you navigate there from the bottom navigation. You can also click on any movie you like to display it's details on the separate page. I have used styled components somewhere, but for some style one-liners I am used to sx (MUI) prop.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
