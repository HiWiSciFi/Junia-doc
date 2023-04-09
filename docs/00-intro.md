# Tutorial Intro

**! This Guide is currently only available for windows users !**

Let's create a small project in Junia in 10 minutes.

## Getting Started

Get started by creating a **new project**.

### What you'll need

You need to have the following **dependencies installed**:<br/>
&bull; [Visual Studio Community](https://visualstudio.microsoft.com/downloads/) with C++ and CMake support<br/>
&bull; [Git](https://git-scm.com/download/win)<br/>
&bull; [CMake](https://cmake.org/download/#latest) &ge; v3.20<br/>
&bull; [OpenAL SDK](https://www.openal.org/downloads/) = v1.1<br/>
&bull; [LunarG Vulkan SDK](https://vulkan.lunarg.com/sdk/home) &ge; v1.3

## Generate a new project

Generate a new Junia project using the **project generation script**.

Download the [project creation script](https://raw.githubusercontent.com/HiWiSciFi/Junia/development/scripts/windows_create_project.bat "download"), place it in a folder where you want to create the project and execute it.

You will be prompted with typing in a project name. Project names may only include [`a`-`z`], [`A`-`Z`], [`0`-`9`], `-`, `+`, `.` and `_`.<br/>
However you should not use names that might conflict with dependencies like `Junia`, `GLFW`, `clean`, `help`, `install`, `package`, etc.

The project creation script will also do a test build and run of the application.

## Start your application

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
