export const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
export const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const validateImage = (file: File): string | null => {
  if (!ALLOWED_TYPES.includes(file.type)) {
    return 'Only JPG, PNG, and WebP images are allowed';
  }
  if (file.size > MAX_FILE_SIZE) {
    return 'Image must be less than 2MB';
  }
  return null;
};

export const compressImage = async (file: File): Promise<File> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target?.result as string;
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Canvas not supported'));
          return;
        }
        
        let width = img.width;
        let height = img.height;
        const maxSize = 800;
        
        if (width > maxSize || height > maxSize) {
          if (width > height) {
            height = (height / width) * maxSize;
            width = maxSize;
          } else {
            width = (width / height) * maxSize;
            height = maxSize;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const compressedFile = new File([blob], file.name, {
                type: 'image/jpeg',
                lastModified: Date.now(),
              });
              resolve(compressedFile);
            } else {
              reject(new Error('Compression failed'));
            }
          },
          'image/jpeg',
          0.85
        );
      };
      
      img.onerror = () => reject(new Error('Invalid image'));
    };
    
    reader.onerror = () => reject(new Error('Failed to read file'));
  });
};

export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('image', file);
  
  const res = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  });
  
  if (!res.ok) throw new Error('Upload failed');
  
  const data = await res.json();
  return data.url;
};

export const deleteImage = async (url: string): Promise<void> => {
  if (!url || url === '/product-1.jpg') return;
  
  await fetch('/api/upload', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
  });
};