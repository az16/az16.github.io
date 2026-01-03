document.addEventListener('DOMContentLoaded', function() {
  const filterDropdown = document.getElementById('tag-filter');
  const projectItems = document.querySelectorAll('.project-item');
  const tagElements = document.querySelectorAll('.project-tags .tag');

  // Collect all unique tags
  const allTags = new Set();
  projectItems.forEach(item => {
    const tags = item.getAttribute('data-tags');
    if (tags) {
      tags.split(',').forEach(tag => {
        const trimmedTag = tag.trim();
        if (trimmedTag) {
          allTags.add(trimmedTag);
        }
      });
    }
  });

  // Populate dropdown
  Array.from(allTags).sort().forEach(tag => {
    const option = document.createElement('option');
    option.value = tag;
    option.textContent = tag;
    filterDropdown.appendChild(option);
  });

  // Filter on dropdown change
  filterDropdown.addEventListener('change', function() {
    const selectedTag = this.value;
    projectItems.forEach(item => {
      if (!selectedTag) {
        item.classList.remove('hidden');
      } else {
        const tags = item.getAttribute('data-tags').split(',').map(t => t.trim()).filter(t => t);
        if (tags.includes(selectedTag)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      }
    });
  });

  // Make tag clicks filter too
  tagElements.forEach(tag => {
    tag.addEventListener('click', function(e) {
      e.preventDefault();
      const tagValue = this.getAttribute('data-tag');
      filterDropdown.value = tagValue;
      filterDropdown.dispatchEvent(new Event('change'));
    });
  });
});
