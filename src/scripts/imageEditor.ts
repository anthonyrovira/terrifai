import { getCldImageUrl } from "astro-cloudinary/helpers";
import "two-up-element";
import colorPalette from "@utils/colors";

export function setupImageEditor(imageId: string) {
  const preview = document.getElementById("preview") as HTMLImageElement;

  const removeTarget = document.getElementById("remove-target") as HTMLInputElement;
  const removeShadow = document.getElementById("remove-shadow") as HTMLInputElement;
  const removeTargetButton = document.getElementById("remove-target-button") as HTMLButtonElement;
  const replaceBackgroundPrompt = document.getElementById("replace-background") as HTMLInputElement;
  const replaceBackgroundButton = document.getElementById("replace-background-button") as HTMLButtonElement;
  const replaceElementTarget = document.getElementById("replace-element-target") as HTMLInputElement;
  const replaceElementReplace = document.getElementById("replace-element-replace") as HTMLInputElement;
  const replaceElementButton = document.getElementById("replace-element-button") as HTMLButtonElement;
  const recolorTarget = document.querySelector("input[name='recolor-target']") as HTMLInputElement;
  const recolorColor = document.querySelector("select[name='recolor-color']") as HTMLSelectElement;
  const recolorButton = document.getElementById("recolor-button") as HTMLButtonElement;

  const downloadButton = document.getElementById("download-button") as HTMLButtonElement;

  removeTargetButton.addEventListener("click", handleRemoveElement);
  replaceBackgroundButton.addEventListener("click", handleReplaceBackground);
  replaceElementButton.addEventListener("click", handleReplaceElement);
  recolorButton.addEventListener("click", handleRecolor);

  downloadButton.addEventListener("click", () => {
    const currentUrl = preview.src;
    handleDownload(currentUrl)();
  });

  function handleRemoveElement() {
    const target = removeTarget.value;
    const shadow = removeShadow.checked;
    if (!target) return;

    const url = getCldImageUrl({
      src: imageId,
      format: "avif",
      remove: {
        multiple: true,
        prompt: `${target}`,
        removeShadow: shadow || false,
      },
    });

    updatePreview(url);
  }

  function handleReplaceBackground() {
    const prompt = replaceBackgroundPrompt.value;
    if (!prompt) return;

    const url = getCldImageUrl({
      src: imageId,
      format: "avif",
      replaceBackground: `Consider this following prompt but always making sure that the picture is halloween-themed : ${prompt}`,
    });

    updatePreview(url);
  }

  function handleReplaceElement() {
    const target = replaceElementTarget.value;
    const replace = replaceElementReplace.value;
    if (target == null || replace == null) return;

    const url = getCldImageUrl({
      src: imageId,
      format: "avif",
      replace: {
        from: target,
        to: replace,
        preserveGeometry: true,
      },
    });

    updatePreview(url);
  }

  function handleRecolor() {
    const target = recolorTarget.value;
    const color = recolorColor.value;
    if (target == null || color == null) return;

    const url = getCldImageUrl({
      src: imageId,
      format: "avif",
      recolor: {
        prompt: `Replace ${target} color`,
        to: colorPalette[color].hex.replace("#", ""),
        multiple: true,
      },
    });

    updatePreview(url);
  }

  function handleDownload(url: string) {
    return async () => {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = `${imageId}.avif`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Clean up the blob URL
        window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error("Error downloading the image:", error);
      }
    };
  }

  function updatePreview(url: string) {
    preview.style.opacity = ".3";
    preview.src = url;
    preview.onload = () => {
      preview.style.opacity = "1";
    };
  }
}
