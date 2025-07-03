#!/usr/bin/env python3
"""
Debug script to see the actual HTML content returned by the site.
"""

import requests

def debug_site():
    url = "https://chien7n.github.io/AboutMe/"
    
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        print(f"URL: {url}")
        print(f"Status: {response.status_code}")
        print(f"Content Length: {len(response.text)}")
        print("\n" + "="*50)
        print("ACTUAL HTML CONTENT:")
        print("="*50)
        print(response.text)
        print("="*50)
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    debug_site() 