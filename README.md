# PathMem - Personal Route Intelligence System

A Progressive Web App that learns your walking routes and helps you navigate using your personal shortcuts.

## Features

- **Route Recording**: GPS tracking of your walks with distance, duration, and breadcrumb points
- **Place Saving**: Save frequently visited locations (Home, Work, Gym, etc.)
- **Compass Navigation**: Visual compass pointing to your destination
- **Route Mesh Learning**: Automatically identifies where your routes intersect for smarter navigation
- **Offline Support**: Works without internet once installed
- **No Account Required**: All data stored locally on your device

## Free Hosting on GitHub Pages

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to https://github.com
2. Click "Sign up" and create a free account

### Step 2: Create a New Repository
1. Click the "+" icon in the top right → "New repository"
2. Name it `pathmem` (or whatever you want)
3. Make sure "Public" is selected
4. Check "Add a README file"
5. Click "Create repository"

### Step 3: Upload the Files
1. In your new repository, click "Add file" → "Upload files"
2. Drag and drop ALL the files from this folder:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icons/` folder (with all the PNG files)
3. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to your repository's "Settings" tab
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch and "/ (root)" folder
5. Click "Save"

### Step 5: Access Your App
- Your app will be live at: `https://YOUR_USERNAME.github.io/pathmem/`
- It takes 1-2 minutes for the first deployment

## Installing on Your Phone

### Android (Chrome)
1. Open the URL in Chrome
2. Tap the three-dot menu (⋮)
3. Tap "Add to Home screen" or "Install app"
4. Tap "Install"

### iPhone (Safari)
1. Open the URL in Safari
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"

## How to Use

### Recording a Route
1. Open the app and go to the "Record" tab
2. Wait for GPS signal (shows accuracy)
3. Tap the big button to start recording
4. Walk your route
5. Tap again to stop
6. Enter a name and save

### Saving a Place
1. Go to the "Places" tab
2. Make sure you're at the location you want to save
3. Tap "+ Add Current"
4. Enter a name (e.g., "Home", "Work", "Livi Centre")

### Navigating
1. Go to the "Navigate" tab
2. Select a destination from the dropdown
3. The compass will point toward your destination
4. Distance and ETA shown below

## Technical Notes

- **GPS Accuracy**: Works best outdoors with clear sky view
- **Battery Usage**: GPS polling is optimized but will use some battery when recording
- **Data Storage**: All data stored in IndexedDB (browser local storage)
- **Privacy**: No data leaves your device - everything is local

## Route Mesh Intelligence

The app builds a "mesh" of your routes over time:
- It identifies where different routes cross each other
- Uses this to suggest optimal paths combining multiple routes
- The more you walk, the smarter it gets

## Future Ideas

- [ ] Route sharing with friends
- [ ] Cloud backup (optional)
- [ ] Estimated arrival notifications
- [ ] Integration with fitness trackers
- [ ] Voice guidance option
- [ ] Dark/light theme toggle

## Troubleshooting

**GPS not working?**
- Make sure location permission is granted
- Try going outside - GPS works poorly indoors
- Check if battery saver mode is blocking GPS

**App not installing?**
- Must access via HTTPS (GitHub Pages provides this)
- Try clearing browser cache
- Make sure you're using Chrome (Android) or Safari (iOS)

**Routes not saving?**
- Check browser storage isn't full
- Try recording a longer route (minimum 5 GPS points needed)

## License

MIT - Do whatever you want with it!

---

Built with ❤️ for walkers who know the shortcuts
