export function setupTabs(): void {
  const tabs: NodeListOf<HTMLElement> = document.querySelectorAll('[role="tab"]');
  const tabContents: NodeListOf<HTMLElement> = document.querySelectorAll('[role="tabpanel"]');

  tabs.forEach((tab: HTMLElement) => {
    tab.addEventListener("click", () => {
      const targetSelector: string | null = tab.getAttribute("data-tabs-target");
      if (!targetSelector) return;

      const target: HTMLElement | null = document.querySelector(targetSelector);
      if (!target) return;

      tabContents.forEach((content: HTMLElement) => {
        content.classList.add("hidden");
      });
      target.classList.remove("hidden");

      tabs.forEach((t: HTMLElement) => {
        t.setAttribute("aria-selected", "false");
        t.classList.remove("text-halloween-orange", "border-halloween-orange");
        t.classList.add("border-transparent");
      });
      tab.setAttribute("aria-selected", "true");
      tab.classList.add("text-halloween-orange", "border-halloween-orange");
      tab.classList.remove("border-transparent");
    });
  });

  // Show the first tab by default
  const firstTab = tabs[0] as HTMLElement;
  firstTab.click();
}
