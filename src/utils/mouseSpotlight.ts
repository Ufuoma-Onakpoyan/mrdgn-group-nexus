export const initMouseSpotlight = () => {
  const updateMousePosition = (e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    document.documentElement.style.setProperty('--mouse-x', `${x}%`);
    document.documentElement.style.setProperty('--mouse-y', `${y}%`);
  };

  document.addEventListener('mousemove', updateMousePosition);
  
  return () => {
    document.removeEventListener('mousemove', updateMousePosition);
  };
};