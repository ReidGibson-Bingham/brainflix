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