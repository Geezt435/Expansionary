
<div align="center">
  <img src="src/assets/astrogon-logo.svg" style="width:80%;" alt="Astrogon Logo" align="center" />
</div>

---

[![GitHub License](https://img.shields.io/github/license/astrogon/astrogon?color=red)](https://github.com/astrogon/astrogon/blob/main/LICENSE) [![Repo Size](https://img.shields.io/github/repo-size/astrogon/astrogon)](https://github.com/astrogon/astrogon) ![GitHub branch check runs](https://img.shields.io/github/check-runs/astrogon/astrogon/main) [![Website](https://img.shields.io/website?up_message=online&up_color=limegreen&down_message=offline&down_color=yellow&url=https%3A%2F%2Fastrogon.reednel.com%2F)](https://astrogon.reednel.com/)

Astrogon is a rapidly-customizable multipurpose website template built using Astro JS, Tailwind, and a sprinkle of React.

## Features

### Content Collections

- Blog
  - Implements **Categories** and **Tags**, for easy filtering and searching
- Documentation
  - **Multi-level** document structure
  - Toggleable **Doc Browser** sidebar
  - Toggleable **Table of Contents** sidebar
- Recipes
  - Demonstrates a highly **templated structure**
- Authors - A collection that can **link entries across collections** by the Author field
- Poetry - A trim interface for a lightweight collection, demonstrating pagination over the content pages
- Index Cards - A variation on the "Poetry" layout, where all content is kept in a single file, and displayed in a single page
- And more:
  - Homepage
  - About/Bio
  - Terms and Conditions
  - 404 page

#### Content Components & Features

- **Accordion**/collapsible section
- **Tabs** section
- **Code Block** with syntax highlighting
- **Quote Block**
- **Notice Blocks** - note, tip, info, & warning
- **Embedded YouTube Video**
- Integrated **LaTeX** support for inline and block mathematical expressions
- All the standard **MD/MDX** features, including footnotes, tables, and more

### Additional Features

- Comprehensive **Light Mode** and **Dark Mode** support, with automatic detection of system preference
- **Searchablility** over all content you choose to include
- **Adaptive Layout** for all screen sizes, from phone a to a desktop monitor
- **Tool Tips** that can be added seamlessly to any interactable element
- **Breadcrumbs** for rapid navigation
- Auto-populating **Related Content** section available for any content collection
- Auto-calculating **Reading Time** available for any content collection
- Togglable **Frosted Glass** effect on all components
- Easily customizable color scheme and typography
- Animated component **Transitions** for an elegant flourish
- **Pagination** for any content collection
- Component for **Social Media** sharing
- Built-in patterns for **Search Engine Optimization** and **Accessibility**

Every one of these features was designed with modularity and customizability in mind, for the smoothest development experience possible. For more details, see [docs/customization.md](docs/customization.md).

## Recommended Technologies

- [Git](https://git-scm.com)
- [Node Version Manager](https://github.com/nvm-sh/nvm)
- [Visual Studio Code](https://code.visualstudio.com/)

See [docs/tech-stack.md](docs/tech-stack.md) for more details.

## Development Instructions

1. Fork the repo `git clone https://github.com/astrogon/astrogon.git`
2. Use Node 22: `nvm install 22` or `nvm use 22`
3. Install Node dependencies: `npm install`
4. Build: `npm run dev`
5. See your changes live at `http://localhost:4321`

## License

Astrogon is licensed under the [MIT License](LICENSE).

## Acknowledgments

This template was originally derived from [zeon-studio](https://github.com/zeon-studio)'s [astroplate](https://github.com/zeon-studio/astroplate), with structure borrowed from [jordienr](https://github.com/jordienr)'s [astro-design-system](https://github.com/jordienr/astro-design-system) and [TheOtterlord](https://github.com/TheOtterlord)'s [manual](https://github.com/TheOtterlord/manual).
