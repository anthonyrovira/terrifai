import { getCldImageUrl } from "astro-cloudinary/helpers";
import "two-up-element";
import colorPalette from "@utils/colors";

export function setupImageEditor(imageId: string) {
  const preview = document.getElementById("preview") as HTMLImageElement;
  const enhance = document.getElementById("enhance") as HTMLInputElement;
  const recolorTarget = document.querySelector("input[name='recolor-target']") as HTMLInputElement;
  const recolorColor = document.querySelector("select[name='recolor-color']") as HTMLSelectElement;
  const recolorButton = document.getElementById("recolor-button") as HTMLButtonElement;
  const replaceBackgroundPrompt = document.querySelector("input[name='replace-background']") as HTMLInputElement;
  const replaceBackgroundButton = document.getElementById("replace-background-button") as HTMLButtonElement;
  const replaceElementTarget = document.getElementById("replace-element-target") as HTMLInputElement;
  const replaceElementReplace = document.getElementById("replace-element-replace") as HTMLInputElement;
  const replaceElementButton = document.getElementById("replace-element-button") as HTMLButtonElement;
  const improve = document.getElementById("improve") as HTMLInputElement;
  const restore = document.getElementById("restore") as HTMLInputElement;
  const downloadButton = document.getElementById("download-button") as HTMLButtonElement;

  const angleInput = document.getElementById("angle") as HTMLInputElement;
  const zoompanCheckbox = document.getElementById("zoompan") as HTMLInputElement;

  const backgroundInput = document.getElementById("background") as HTMLInputElement;
  const cropSelect = document.getElementById("crop") as HTMLSelectElement;
  const fillBackgroundCheckbox = document.getElementById("fillBackground") as HTMLInputElement;
  const gravitySelect = document.getElementById("gravity") as HTMLSelectElement;
  const removeInput = document.getElementById("remove") as HTMLInputElement;
  const removeBackgroundCheckbox = document.getElementById("removeBackground") as HTMLInputElement;
  const zoomInput = document.getElementById("zoom") as HTMLInputElement;

  enhance.addEventListener("change", handleEnhance);
  recolorButton.addEventListener("click", handleRecolor);
  replaceBackgroundButton.addEventListener("click", handleReplaceBackground);
  improve.addEventListener("change", handleImprove);
  replaceElementButton.addEventListener("click", handleReplaceElement);
  restore.addEventListener("change", handleRestore);
  downloadButton.addEventListener("click", handleDownload);

  angleInput.addEventListener("change", handleAngle);
  backgroundInput.addEventListener("change", handleBackground);
  cropSelect.addEventListener("change", handleCrop);
  fillBackgroundCheckbox.addEventListener("change", handleFillBackground);
  gravitySelect.addEventListener("change", handleGravity);
  removeInput.addEventListener("change", handleRemove);
  removeBackgroundCheckbox.addEventListener("change", handleRemoveBackground);
  zoomInput.addEventListener("change", handleZoom);
  zoompanCheckbox.addEventListener("change", handleZoompan);

  function handleAngle() {
    updatePreviewWithCurrentSettings();
  }

  function handleBackground() {
    updatePreviewWithCurrentSettings();
  }

  function handleCrop() {
    updatePreviewWithCurrentSettings();
  }

  function handleFillBackground() {
    updatePreviewWithCurrentSettings();
  }

  function handleGravity() {
    updatePreviewWithCurrentSettings();
  }

  function handleRemove() {
    updatePreviewWithCurrentSettings();
  }

  function handleRemoveBackground() {
    updatePreviewWithCurrentSettings();
  }

  function handleZoom() {
    updatePreviewWithCurrentSettings();
  }

  function handleZoompan() {
    updatePreviewWithCurrentSettings();
  }

  function updatePreviewWithCurrentSettings() {
    const url = getCldImageUrl({
      src: imageId,
      enhance: enhance.checked,
      restore: restore.checked,
      improve: improve.value,
      angle: angleInput.value ? parseInt(angleInput.value) : undefined,
      background: backgroundInput.value || undefined,
      crop: "auto",
      fillBackground: fillBackgroundCheckbox.checked ? { gravity: gravitySelect.value } : undefined,
      gravity: gravitySelect.value || undefined,
      recolor:
        recolorTarget.value && recolorColor.value
          ? {
              prompt: `Replace ${recolorTarget.value} color`,
              to: colorPalette[recolorColor.value].hex.replace("#", ""),
              multiple: true,
            }
          : undefined,
      remove: removeInput.value || undefined,
      removeBackground: removeBackgroundCheckbox.checked,
      replace:
        replaceElementTarget.value && replaceElementReplace.value
          ? {
              from: replaceElementTarget.value,
              to: replaceElementReplace.value,
              preserveGeometry: true,
            }
          : undefined,
      replaceBackground: replaceBackgroundPrompt.value
        ? `Consider this following prompt but always making sure that the picture is halloween-themed : ${replaceBackgroundPrompt.value}`
        : undefined,
      zoom: zoomInput.value || undefined,
      zoompan: zoompanCheckbox.checked,
    });

    updatePreview(url);
  }

  function handleEnhance(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target == null) return;
    const url = getCldImageUrl({
      src: imageId,
      enhance: target.checked,
      restore: restore.checked,
      improve: improve.value,
    });

    updatePreview(url);
  }

  function handleRecolor() {
    const target = recolorTarget.value;
    const color = recolorColor.value;
    if (target == null || color == null) return;

    const url = getCldImageUrl({
      src: imageId,
      enhance: enhance.checked,
      restore: restore.checked,
      recolor: {
        prompt: `Replace ${target} color`,
        to: colorPalette[color].hex.replace("#", ""),
        multiple: true,
      },
    });

    updatePreview(url);
  }

  function handleReplaceBackground() {
    const prompt = replaceBackgroundPrompt.value;
    if (prompt == null) return;

    const url = getCldImageUrl({
      src: imageId,
      enhance: enhance.checked,
      restore: restore.checked,
      replaceBackground: `Consider this following prompt but always making sure that the picture is halloween-themed : ${prompt}`,
    });

    updatePreview(url);
  }

  function handleImprove() {
    const value = improve.value;
    if (value == null) return;

    const url = getCldImageUrl({
      src: imageId,
      enhance: enhance.checked,
      restore: restore.checked,
      improve: value,
    });

    updatePreview(url);
  }

  function handleReplaceElement() {
    const target = replaceElementTarget.value;
    const replace = replaceElementReplace.value;
    if (target == null || replace == null) return;

    const url = getCldImageUrl({
      src: imageId,
      enhance: enhance.checked,
      restore: restore.checked,
      replace: {
        from: target,
        to: replace,
        preserveGeometry: true,
      },
    });

    updatePreview(url);
  }

  function handleRestore() {
    const value = restore.checked;
    if (value == null) return;

    const url = getCldImageUrl({
      src: imageId,
      enhance: enhance.checked,
      improve: improve.value,
      restore: value,
    });

    updatePreview(url);
  }

  function handleDownload() {
    const url = getCldImageUrl({ src: imageId, format: "avif" });

    const a = document.createElement("a");
    a.href = url;
    a.download = `${imageId}.avif`;
    a.click();
  }

  function updatePreview(url: string) {
    preview.style.opacity = ".3";
    preview.src = url;
    preview.onload = () => {
      preview.style.opacity = "1";
    };
  }
}
