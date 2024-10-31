# Deployment

## Render Deployment (Backend)

### Create a new app on Render

1.  Create a new Render account if you don't already have one here [Render](https://render.com/).

2.  Create a new application on the following page here [New Render App](https://dashboard.render.com/), choose **Webserver**:

    - ![New Render App](documentaion/deployment/render_new_web_service.png)

3.  Search for the repository you created and click "Connect."

4.  Create name for the application

    - ![Create Application Name](documentaion/deployment/render_create_name.png)

5.  Select the region where you want to deploy the application.

    - ![Select Region](documentaion/deployment/render_select_region.png)

6.  Select branch to deploy.

    - ![Select Branch](documentaion/deployment/render_select_branch.png)

7.  Select environment.

    - ![Select Environment Variables](documentaion/deployment/render_select_environment.png)

8.  Render build command: `gunicorn app:app`

    - ![Render Build Command](documentaion/deployment/render_build_command.png)

9.  Select Free plan.

    - ![Select Free Plan](documentaion/deployment/render_payment_info.png)

10. Click "Create Web Service."

    - ![Save Web Service](documentaion/deployment/render_create_web_service.png)

---

## Firebase Deployment (Frontend)

1. Go to [Firebase](https://firebase.google.com/) and create a new account.

2. Create a new project:

   - ![New Firebase Project](documentaion/deployment/firebase_create_project.png)

3. Name your project

4. Add an app to your project by clicking on Web button

   - ![New Firebase App](documentaion/deployment/firebase_choose_web.png)

5. Name and register the app

   - ![Register Firebase App](documentaion/deployment/firebase_add_web.png)

6. Install firebase package by running `npm install firebase` in the directory

7. Create a file for the config and paste the data for the app

   - ![Firebase Config file](documentaion/deployment/firebase_config_file.png)

8. Install firebase tools by running `npm install firebase-tools` in the directory

9. Build your app by running `npm run build`.

10. Initialize Firebase by running `firebase init` in the directory.

11. Deploy the app by running `firebase deploy`
