/**
 *
 * @param {HTMLElement} footer
 * @param {HTMLElement} header
 * @returns
 */
function watchTemplate(header, footer) {
  if (!header || !footer) return;
  window.addEventListener("resize", setHeaderHeight(header));
  document.addEventListener("DOMContentLoaded", setHeaderHeight(header));
  footer.innerText = `© ${new Date().getFullYear()}`;
}

function setHeaderHeight(header) {
  return () => {
    document.body.style.setProperty(
      "--headerHeight",
      `${header.clientHeight}px`
    );
  };
}

export default watchTemplate;
