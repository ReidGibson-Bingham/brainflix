# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### notes about project structure
- according to the brainstation project structure
- each component will be a folder with a corresponding component file and style file

### BrainFlix Sprint 1
Project Overview
You have been approached by an entrepreneur to build out a prototype for a new video streaming platform called BrainFlix. The entrepreneur has meetings lined up for funding with several VCs and needs the prototype built within the next three weeks. BrainFlix’s Creative Director has provided you with a package and mockup of how they envision the final product. There is also a separate team that is currently working on a backend API needed to integrate with the front-end, but for the time being the static components need to be put together.

It will be your job to create a functioning and responsive app prototype from the project designs provided.

To submit this deliverable, ensure you merge your develop branch with the main branch. Submit the link to your GitHub repository in Synapse before the submission deadline.

### Tools & Resources
[x]Download the Sprint 1 Design Package which includes the required assets, style guide, spec sheets, and mockup.
[x]Use create-react-app to allow you to quickly create a React starter project.
[x]Use the sass npm package to allow you to compile .scss files in the project
[x]npm can be used to install JavaScript libraries that will help you complete your project.
### Functional Requirements
[x] The ”Next Video” sidebar must not contain the current video being displayed.
[x] Components should render using dynamic data, not hardcoded HTML (eg. comments, current video, and video-list sections).
[x] Side Videos should be clickable and upon selecting a video you should update the Main Video section to display the details and comments of a new video. Think of which React concept you could use to update the UI based on user interaction.
### Visual Design Requirements
[x] The site must be responsive at and between breakpoints, and should closely resemble the mockups in the design package.
### Implementation Requirements
[x] Your project must follow the proper folder structure and naming convention outlined in the Project Guidelines section in Synapse and the Sprint 1 Folder Structure Diagram.
[x] The site must make use of the provided assets.
[x] The site must be composed of multiple React components.
[] The site must use the <video> tag for the video player.
Although the <video> tag will not be functional for this sprint, all visual elements of the video player must exist on the deliverable without functionality.
Use the poster attribute to have the video player resemble the mockup.
[x] Video controls should be the default <video> controls. Don’t worry if the default styling doesn’t match the mockups, re-styling them will be part of the later sprint.
[x] Using both of the data files provided from the assets, you must use state to hold the data and pass it down as props to generate side-videos and main-video content including comments.
[x] The data files provided are meant to mimic a REST API response, where one endpoint will return a small amount of data for each video that exists, the second endpoint will return all the data for one specific video. Think about how you may use the data files provided to achieve this within your project.
[x] The main-video should be included in the side-videos array held in state (with the same object keys as other side-video objects) and filtered out of the side-videos section programmatically when rendering the component.
[x] The main-video object, with extended properties, should be held in a separate portion of state
[x] The comments-section form doesn’t need to be functional. You don’t need to be able to post new comments for this Sprint, but the comments still need to be rendered dynamically (data coming from comments property of the main-video object stored in state).
[x] You must use SASS for your styling and take advantage of SASS variables, plus any other SASS features that can help improve your code.
[x] Class naming for your styling must use BEM.
[x] Layout of the site must use Flexbox.
### Project Structure - BrainFlix Sprint 1
[x] Remember to use your develop & feature branches for development during this sprint, and merge your develop branch with main when submitting your sprint. Sprint 1 Structure Diagram

### Diving Deeper
Diving Deeper challenges should only be attempted if all project requirements are met and adding Diving Deeper challenges do not conflict with the existing requirements. The following are suggestions that you can try to take your understanding deeper and go above and beyond the basic requirements.

Dynamic Timestamp
To add a more refined feel to the site, let's update the timestamp in the comments section and video details to reflect when it was posted in a more human-readable format. Using YouTube as an example, a recently posted comment might display the time posted as "10 minutes ago" or "3 days ago". Apply this type of timestamp to your data without hardcoding the actual message.

See Requirement Level Key Words


# BrainFlix Sprint 2

### temp to do: 
- download necessary dependencies (axios)
- fix some style elements
- switch the home component local storage data with API data
- get my links working then start with the api calls


Project Overview
Feedback has come in from the team at BrainFlix and the prototype looks good so far! For this next sprint, they have provided a mock API that will provide some hard-coded movie data that you can use to start building out the functionality of your front-end application. You will also be required to add a second page to the site that will be used for adding new video content to the site.

You will need to leverage your HTML, CSS, and React skills to enhance what you built-in Sprint 1.

To submit this deliverable, ensure you merge your develop branch with the main branch. Submit the link to your GitHub repository in Synapse before the submission deadline.

Back-End API
https://project-2-api.herokuapp.com

API Documentation: Review the documentation to gain an understanding of how the API works.
Postman is a web client that makes testing APIs simple. You can use it to test the provided back-end API before writing any code.
When communicating with the API, you will need to supply an API key in order to authenticate yourself. Instructions for how to work with the API can be found at the API documentation link above.
Tools & Resources
Download the complete design package for Sprint 2.
You must use react-router-dom to create the multi-page functionality of the app.
npm can be used to install JavaScript libraries that will help you complete your project such as axios.
Use the sass npm package to allow you to compile .scss files in the project

### Functional Requirements
[x] Clicking the BrainFlix Logo must link back to the home page (the page with the default video - which will be the first video in the side-videos list).
[] There must be 3 routes:
[] The Home/Video Player Page for displaying the details of a video.
[] The Video Upload Page.
[] A route that will load the video with the provided video id to be displayed using the Video Player Page.
[] Clicking on a video in the “Next Video” list must go to the Video Details Page for the selected video via routing and display all the information for the video such as (likes, views, author, comments, etc).
[x] Clicking on the “Upload” button must link to the Video Upload Page.
### Visual Design Requirements
[] The site must be responsive at and between breakpoints. It must closely resemble the mockups in the design package.
### Implementation Requirements
[] Your project must follow the proper folder structure and naming convention outlined in the Project Guidelines section in Synapse and the Sprint 2 Folder Structure Diagram.
[] The site must make use of the provided assets.
[] The app must use multiple React components as discussed in class.
[] The app must use react-router-dom with multiple routes, one for each page.
[x] The project's CSS must use SASS variables.
[x] The CSS must use BEM principles when naming classes.
[x] The site should use Flexbox for layout control.
### Main Video Page
[] Home Page and Video Details Page should use the same Page Component, and use two separate routes, one for home and the other for a selected video. Think of a unique property of a video object that you could incorporate into your route definition.
[] For the Home Page, the video that should be displayed is the first video within the array of videos.
[] For the Video Details Page, the video that should be displayed is the selected video within the array of videos.
[] You must use the useEffect hook as well as the useParams hook from react-router to determine when to update the main-video data.
[] Clicking on a video thumb in the side-videos section should update the URL. Do not use a click handler to update state for this scenario. This means you need to refactor Sprint 1 functionality to utilize the React Router for this Sprint.
### Video Upload Page
[] The Video Upload Page must match the provided mockup. Upload functionality is not required for this sprint.
[] After form submission, it should notify about “upload” and redirect to a home page with the default video selected.
### Video API
[] Data displayed in the app must be retrieved from the provided mock API using axios.
[] The site must use the provided API to retrieve the video links and video details.
[] The site must use the comments provided with the video details response.
[] All data for videos and comments must come from the provided mock API.
### Project Structure - BrainFlix Sprint 2
[] Remember to use your develop & feature branches for development during this sprint, and merge your develop branch with main when submitting your sprint. Sprint 2 Structure Diagram

### Diving Deeper
Diving Deeper challenges should only be attempted if all project requirements are met and adding Diving Deeper challenges do not conflict with the existing requirements. The following are suggestions that you can try to take your understanding deeper and go above and beyond the basic requirements.
Posting Comments
To add another layer of functionality to the site, try adding the ability to post and delete comments. Regarding the technical implementation, the following requirements should be met:

When posting a comment, ensure that the page does not refresh.
You must POST a comment to the API.
If successful in posting the comment, render the new comment by sending a new request for the "Main Video" data.
After deleting a comment using the API endpoint, your comment section should update without refreshing the browser.
See Requirement Level Key Words