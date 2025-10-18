import ArticleEntry from "@/components/utils/article-entry";
import { Github, Globe2, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageCropperArticle = () => {
  return (
    <ArticleEntry>
      <h1>Image Cropper ✂️</h1>
      <h2>A lightweight, free tool for cropping images</h2>
      <p>
        The <strong>Image Cropper</strong> is a simple web-based tool that
        allows users to quickly and easily crop their images. The project
        originated from a colleague's need for a straightforward yet flexible
        tool that requires no installation and gets the job done effortlessly.
      </p>
      <p>
        The tool supports various masks that can be changed in the sidebar on
        the left. The goal is to provide an intuitive interface suitable for
        both beginners and professionals.
      </p>

      <div className="w-[730px] h-[346px] relative rounded-2xl overflow-hidden mx-auto mb-4 p-4">
        <Image
          src="/images/projects/image-cropper-detail1.png"
          alt="Image Cropper Example"
          fill
        />
      </div>

      <h3>Feature Overview</h3>
      <ul className="list-disc ml-6">
        <li>
          <strong>Various Aspect Ratios:</strong> 16:9, 9:16, 2:1, 1:1, 36:11,
          9:2, 4:5 - selectable flexibly.
        </li>
        <li>
          <strong>Interactive Cropping:</strong> The crop frame can be freely
          moved and resized.
        </li>
        <li>
          <strong>Zoom & Scaling:</strong> The entire image can be zoomed for
          precise cropping.
        </li>
        <li>
          <strong>File Size Limit:</strong> Optional export with a maximum file
          size of 1 MB, ideal for web uploads.
        </li>
        <li>
          <strong>Direct Download:</strong> Crop and save directly as JPEG
          without additional software.
        </li>
      </ul>

      <h3>Technologies & Frameworks</h3>
      <p>
        The project is based on modern web technologies, offering easy
        integration and high performance:
      </p>
      <ul className="list-disc ml-6">
        <li>
          <code>p5.js</code> - for interactive drawing and cropping of images
        </li>
        <li>
          <code>Material Components Web</code> - for UI components
        </li>
        <li>
          <code>Vanilla JS</code> - for logic, image manipulation, and event
          handling
        </li>
      </ul>

      <h3>Technical Concept</h3>
      <p>
        The tool loads the image onto a dynamic canvas where the crop frame can
        be interactively moved and scaled. The export feature optionally
        respects a maximum file size and automatically scales the image if
        needed. All operations are client-side, so no data is sent to a server.
      </p>

      <h3>Current Development Status</h3>
      <p>
        The project is fully functional and is not being actively developed
        further.
      </p>

      <h3>Availability</h3>
      <p>
        <strong>Image Cropper Free</strong> is free to use and available
        directly in the browser. The source code is available on{" "}
        <a
          href="https://github.com/FonsiIsland/imagecrop"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>

      <h4>Vision</h4>
      <p>
        The goal was to create a lightweight, easily accessible tool for fast
        image cropping. Users should be able to crop their images and use them
        immediately without installation or complex settings, which has been
        successfully achieved.
      </p>

      <div className="flex gap-2 items-center justify-center mt-4 mb-2">
        <Github size={20} className="text-text/60" />
        <Link
          href="https://github.com/FonsiIsland/imagecrop"
          target="_blank"
          className="underline cursor-pointer text-text/60"
        >
          Github Link
        </Link>
        <p className="text-sm mb-0">|</p>
        <Globe2 size={20} className="text-text/60" />
        <Link
          href="https://fonsiisland.github.io/imagecrop/"
          target="_blank"
          className="underline cursor-pointer text-text/60"
        >
          Live Website Link
        </Link>
        <p className="text-sm mb-0">|</p>
        <MessageCircleMore size={20} className="text-text/60" />
        <Link href="/contact" className="underline cursor-pointer text-text/60">
          Contact me
        </Link>
      </div>
    </ArticleEntry>
  );
};

export default ImageCropperArticle;
