# How to Change Logos - izh padu Website

## 1. Company Logo (Navbar/Header Logo)

### Current: Text-based logo "izh padu"
**Location**: `/app/frontend/src/components/Navbar.jsx` (Line 33-40)

### Option A: Add Image Logo
```jsx
// Replace the text logo with an image
<button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="flex-shrink-0"
>
  <img 
    src="/logo.png" 
    alt="izh padu" 
    className="h-10 w-auto hover:opacity-80 transition-opacity"
  />
</button>
```

**Steps**:
1. Place your logo file in `/app/frontend/public/` folder (e.g., `logo.png`)
2. Update the Navbar.jsx file with the code above
3. Adjust `h-10` (height) as needed for your logo size

### Option B: Keep Text Logo but Change Style
```jsx
<button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="text-2xl font-bold text-gray-900 hover:opacity-80 transition-opacity"
>
  <span className="text-blue-400">izh</span> padu
</button>
```

## 2. Partner Logos

### Current Location
**File**: `/app/frontend/src/mock.js`
**Section**: `export const partners = [...]`

### How to Change Partner Logos

#### Method 1: Use Direct Logo URLs (Recommended)
If you have direct URLs to logo files:

```javascript
export const partners = [
  {
    id: 1,
    name: "Fortinet",
    logo: "https://your-cdn.com/fortinet-logo.png"  // Your actual logo URL
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "https://your-cdn.com/microsoft-logo.png"
  },
  // ... more partners
];
```

#### Method 2: Use Local Logo Files
1. Create folder: `/app/frontend/public/partners/`
2. Place logo files: `fortinet.png`, `microsoft.png`, etc.
3. Update mock.js:

```javascript
export const partners = [
  {
    id: 1,
    name: "Fortinet",
    logo: "/partners/fortinet.png"
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "/partners/microsoft.png"
  },
  // ... more partners
];
```

#### Method 3: Get Free Logo URLs
Visit these sites for free, high-quality logo URLs:
- **Wikimedia Commons**: https://commons.wikimedia.org (SVG logos available)
- **Seeklogo**: https://seeklogo.com (Direct download links)
- **Worldvectorlogo**: https://worldvectorlogo.com (Vector logos)

Example for Fortinet logo:
```javascript
{
  id: 1,
  name: "Fortinet",
  logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg"
}
```

### Example: Complete Partners Update with Real Logos

```javascript
export const partners = [
  {
    id: 1,
    name: "Fortinet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg"
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  {
    id: 3,
    name: "Dell Technologies",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg"
  },
  {
    id: 4,
    name: "VMware",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg"
  },
  {
    id: 5,
    name: "Palo Alto Networks",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/PaloAltoNetworks_2020_Logo.svg"
  },
  {
    id: 6,
    name: "HPE",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg"
  }
];
```

## 3. Favicon (Browser Tab Icon)

**Current Location**: `/app/frontend/public/favicon.ico`

### To Change:
1. Create/get your favicon (16x16 or 32x32 pixels, .ico or .png format)
2. Replace `/app/frontend/public/favicon.ico` with your file
3. Also update `/app/frontend/public/index.html` if you want multiple sizes:

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

## Quick Tips

1. **Logo Format**: SVG is best (scales perfectly), PNG is also good
2. **Logo Size**: Navbar logo: ~40-50px height, Partner logos: 80-120px width
3. **Background**: Transparent background logos work best
4. **After Changes**: Frontend will hot-reload automatically, just refresh your browser

## Need Help?

If you have logo files but need help uploading or changing them, just let me know! I can:
- Help you upload logo files
- Update the code to use your logos
- Adjust sizing and positioning
- Add hover effects or animations
