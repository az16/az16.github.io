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

  // Position resource links next to Abstract heading
  const resourceLinks = document.getElementById('resource-links');
  if (resourceLinks) {
    // Find the first h2 after the resource links
    let nextH2 = resourceLinks.nextElementSibling;
    while (nextH2 && nextH2.tagName !== 'H2') {
      nextH2 = nextH2.nextElementSibling;
    }
    
    if (nextH2) {
      // Create wrapper
      const headingWrapper = document.createElement('div');
      headingWrapper.className = 'heading-with-resources';
      
      // Insert wrapper before h2
      nextH2.parentNode.insertBefore(headingWrapper, nextH2);
      
      // Move both into wrapper
      headingWrapper.appendChild(resourceLinks);
      headingWrapper.appendChild(nextH2);
    }
  }
});
