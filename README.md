# TerrifAI - Spooky AI Image Transformation

TerrifAI is a web application that allows users to apply spooky AI-powered transformations to their images. This project was created for the [Cloudinary CloudCreate: Spooky AI Hackathon](https://cloudinary.com/blog/cloudinary-cloudcreate-spooky-ai-hackathon), organized in collaboration with [midudev](https://www.twitch.tv/midudev).

[Insert demonstration images here]

## Features

- Upload and transform images using Cloudinary's AI capabilities
- Apply various spooky effects:
  - Replace backgrounds with eerie scenes
  - Remove or replace elements in the image
  - Recolor objects with a Halloween-themed palette
- Interactive image comparison slider
- Responsive design for desktop and mobile devices
- Dark mode support

## Technology Stack

- [Astro](https://astro.build/) - Static Site Generator
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Cloudinary](https://cloudinary.com/) - Cloud-based image and video management
- [astro-cloudinary](https://github.com/cloudinary-community/astro-cloudinary) - Cloudinary integration for Astro

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/your-username/terrifai.git
   cd terrifai
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

3. Set up your Cloudinary credentials:
   Create a `.env` file in the root directory and add your Cloudinary credentials:
   ```
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. Run the development server:
   ```
   pnpm run dev
   ```

5. Open your browser and navigate to `http://localhost:4321`

## Building for Production

To create a production-ready build:
```
pnpm run build
```

The built files will be in the `dist` directory.

## Project Structure

- `src/pages/` - Astro pages
- `src/components/` - Reusable Astro components
- `src/layouts/` - Page layouts
- `src/styles/` - Global styles
- `src/scripts/` - TypeScript utility functions
- `src/content/` - Content collections for Astro
- `public/` - Static assets

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Anthony Rovira - [LinkedIn](https://www.linkedin.com/in/anthonyrovira/)

## Acknowledgements

- [Cloudinary](https://cloudinary.com/) for hosting the hackathon and providing powerful image transformation capabilities
- [midudev](https://www.twitch.tv/midudev) for organizing the hackathon and inspiring the developer community

## License

This project is open source and available under the [MIT License](LICENSE).