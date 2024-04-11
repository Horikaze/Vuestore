import { onMounted, onUnmounted } from 'vue'
export const useClickOutside = (elementRef: { value: HTMLElement | null }, handler: () => void) => {
  const handleClick = (event: MouseEvent) => {
    if (elementRef.value && !elementRef.value.contains(event.target as Node)) {
      handler()
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClick)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClick)
  })
}
