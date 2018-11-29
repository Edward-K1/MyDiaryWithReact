export function toggleLoader(elementId, value = 'none') {
    const loader = document.getElementById(elementId);
    if(loader)
      loader.style.display = value;
  }
