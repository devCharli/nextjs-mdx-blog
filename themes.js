exports.COLOR_THEMES = {
  default: {
    colors: {
      primary: '#333333', // Dark gray for strong contrast without harshness
      'gradient-1': '#f5f5f5', // Light neutral
      'gradient-2': '#e0e0e0', // Muted gray
      'gradient-3': '#d6d6d6', // Softer gray
      'gradient-4': '#bfbfbf', // Subtle contrast
    },
  },
  bejamas: {
    colors: {
      primary: '#5A5A5A', // Softer charcoal
      'gradient-1': '#F8F1E5', // Warm beige
      'gradient-2': '#DDD0B8', // Muted tan
      'gradient-3': '#B0A695', // Balanced neutral
      'gradient-4': '#8C8374', // Subtle shadow effect
    },
  },
  netlify: {
    colors: {
      primary: '#3A3A3A', // Mid-dark gray
      'gradient-1': '#EAEAEA', // Soft off-white
      'gradient-2': '#D5D5D5', // Gentle contrast
      'gradient-3': '#BBBBBB', // Warm neutral
      'gradient-4': '#9E9E9E', // A touch darker
    },
  },
  reddie: {
    colors: {
      primary: '#4F4F4F', // Dark gray for readability
      'gradient-1': '#F0EDE5', // Paper-like off-white
      'gradient-2': '#D7CEC7', // Soft sepia
      'gradient-3': '#C5BFB7', // Gentle tan
      'gradient-4': '#AFA79F', // Slightly deeper beige
    },
  },
  greenie: {
    colors: {
      primary: '#2E2E2E', // Deep charcoal for a classic print look
      'gradient-1': '#F4F3EE', // Subtle eggshell
      'gradient-2': '#DAD7CD', // Soft neutral green tint
      'gradient-3': '#B5B2A8', // Balanced for readability
      'gradient-4': '#A19F96', // Low contrast for comfort
    },
  },
};

exports.FONT_THEMES = {
  'sans-serif': `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  serif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
  monospace: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
};
