#!/usr/bin/env python3
"""
Final comprehensive test script for the GitHub Pages site.
This will help diagnose the deployment issue and provide clear next steps.
"""

import requests
import time
from bs4 import BeautifulSoup
import sys

def test_site():
    url = "https://chien7n.github.io/AboutMe/"
    
    print(f"🔍 Testing site: {url}")
    print("=" * 60)
    
    try:
        # Make request to the site
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        print(f"✅ HTTP Status: {response.status_code}")
        print(f"✅ Content Length: {len(response.text)} characters")
        
        # Parse the HTML
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Check what version is being served
        print("\n📋 VERSION ANALYSIS:")
        if "/src/main.jsx" in response.text:
            print("❌ DEVELOPMENT VERSION DETECTED")
            print("   - Site is serving the development files")
            print("   - This means GitHub Pages is not using the gh-pages branch")
        elif "/AboutMe/assets/" in response.text:
            print("✅ PRODUCTION VERSION DETECTED")
            print("   - Site is serving the built files")
            print("   - GitHub Pages is correctly configured")
        else:
            print("⚠️  UNKNOWN VERSION")
            print("   - Cannot determine which version is being served")
        
        # Show the actual HTML content
        print(f"\n📄 ACTUAL HTML CONTENT ({len(response.text)} chars):")
        print("-" * 40)
        print(response.text)
        print("-" * 40)
        
        # Check for specific elements
        print(f"\n🔍 ELEMENT ANALYSIS:")
        
        # Check for React root div
        root_div = soup.find('div', id='root')
        if root_div:
            print(f"✅ React root div found")
            print(f"   Content: '{root_div.get_text()}'")
        else:
            print("❌ React root div not found")
            
        # Check for CSS and JS assets
        css_links = soup.find_all('link', rel='stylesheet')
        js_scripts = soup.find_all('script', type='module')
        
        print(f"✅ CSS files: {len(css_links)}")
        for css in css_links:
            print(f"   CSS: {css.get('href', 'No href')}")
            
        print(f"✅ JS files: {len(js_scripts)}")
        for js in js_scripts:
            print(f"   JS: {js.get('src', 'No src')}")
        
        # Determine the issue and provide solutions
        print(f"\n🚨 DIAGNOSIS:")
        if "/src/main.jsx" in response.text:
            print("❌ PROBLEM: GitHub Pages is serving development files")
            print("\n🔧 SOLUTIONS TO TRY:")
            print("1. Check GitHub Pages settings:")
            print("   - Go to your repository on GitHub")
            print("   - Click Settings > Pages")
            print("   - Make sure 'Source' is set to 'Deploy from a branch'")
            print("   - Set 'Branch' to 'gh-pages' and folder to '/' (root)")
            print("   - Click Save")
            print("\n2. Alternative: Use /docs folder approach:")
            print("   - Change vite.config.js base to './'")
            print("   - Change build outDir to 'docs'")
            print("   - Set GitHub Pages to serve from 'main' branch, '/docs' folder")
            print("\n3. Wait longer:")
            print("   - GitHub Pages can take 5-10 minutes to update")
            print("   - Clear browser cache and try again")
            
        elif "/AboutMe/assets/" in response.text:
            print("✅ SUCCESS: Production version detected")
            print("   The site should be working correctly!")
            
        else:
            print("⚠️  UNKNOWN: Cannot determine the issue")
            print("   Check GitHub Pages settings manually")
            
        return "/src/main.jsx" not in response.text
        
    except requests.exceptions.RequestException as e:
        print(f"❌ Failed to fetch site: {e}")
        return False
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
        return False

def main():
    print("🎯 FINAL SITE TEST")
    print("=" * 60)
    print("This test will help diagnose why the site isn't working.")
    print("Waiting 2 minutes for any recent changes to propagate...")
    
    try:
        # Wait 2 minutes
        for i in range(120, 0, -1):
            if i % 30 == 0:
                print(f"⏳ {i} seconds remaining...")
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n⏭️  Skipping wait time...")
    
    print("\n🚀 Starting comprehensive test...")
    success = test_site()
    
    print(f"\n" + "=" * 60)
    if success:
        print("🎉 SUCCESS: Site appears to be working correctly!")
    else:
        print("❌ ISSUE DETECTED: Follow the solutions above to fix the deployment.")
        
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main()) 