import asyncio
from browser import screenshot_desktop, screenshot_mobile, print_page

async def main():
    url = "https://rishafathimawedsfazil.lovable.app/?utm_id=97760_v0_s00_e0_tv4"
    await asyncio.gather(
        screenshot_desktop(url=url),
        screenshot_mobile(url=url),
        print_page(url=url)
    )

if __name__ == "__main__":
    asyncio.run(main())
